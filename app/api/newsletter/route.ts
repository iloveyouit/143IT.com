import { NextResponse } from 'next/server';
import { z } from 'zod';
import { checkRateLimit, getClientIdentifier } from '@/lib/rate-limit';

// Validation schema for newsletter subscription
const newsletterSchema = z.object({
    email: z
        .string()
        .email('Invalid email address')
        .max(255, 'Email must be less than 255 characters')
        .toLowerCase()
        .trim(),
    // Optional: Add name field for personalized emails
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters')
        .trim()
        .optional(),
});

// Rate limit configuration: 3 requests per 15 minutes (stricter than contact form)
const RATE_LIMIT_CONFIG = {
    limit: 3,
    windowMs: 15 * 60 * 1000, // 15 minutes
};

export async function POST(request: Request) {
    try {
        // Rate limiting
        const clientId = getClientIdentifier(request);
        const rateLimitResult = checkRateLimit(clientId, RATE_LIMIT_CONFIG);

        if (!rateLimitResult.success) {
            const resetDate = new Date(rateLimitResult.reset);
            return NextResponse.json(
                {
                    success: false,
                    error: 'Too many subscription attempts. Please try again later.',
                    retryAfter: resetDate.toISOString(),
                },
                {
                    status: 429,
                    headers: {
                        'X-RateLimit-Limit': rateLimitResult.limit.toString(),
                        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
                        'X-RateLimit-Reset': rateLimitResult.reset.toString(),
                        'Retry-After': Math.ceil((rateLimitResult.reset - Date.now()) / 1000).toString(),
                    },
                }
            );
        }

        // Parse and validate request body
        const body = await request.json();
        const validationResult = newsletterSchema.safeParse(body);

        if (!validationResult.success) {
            const errors = validationResult.error.issues.map((err) => ({
                field: err.path.join('.'),
                message: err.message,
            }));

            return NextResponse.json(
                {
                    success: false,
                    error: 'Validation failed',
                    details: errors,
                },
                { status: 400 }
            );
        }

        const validatedData = validationResult.data;

        // Check if webhook URL is configured
        const webhookUrl = process.env.N8N_NEWSLETTER_WEBHOOK;

        if (!webhookUrl) {
            console.warn('N8N_NEWSLETTER_WEBHOOK is not defined');

            // In development, simulate success
            if (process.env.NODE_ENV === 'development') {
                console.log('📧 Newsletter subscription (DEV MODE):', validatedData);
                return NextResponse.json(
                    {
                        success: true,
                        message: 'Subscribed (Development mode: Webhook not configured)',
                    },
                    { status: 200 }
                );
            }

            // In production, this is an error
            console.error('N8N_NEWSLETTER_WEBHOOK not configured in production');
            return NextResponse.json(
                {
                    success: false,
                    error: 'Newsletter subscription is temporarily unavailable. Please try again later.',
                },
                { status: 503 }
            );
        }

        // Prepare payload for n8n
        const payload = {
            email: validatedData.email,
            name: validatedData.name,
            source: '143it-website-newsletter',
            timestamp: new Date().toISOString(),
            userAgent: request.headers.get('user-agent') || 'unknown',
            clientIp: clientId,
            // Add subscription metadata
            subscriptionType: 'newsletter',
            language: request.headers.get('accept-language')?.split(',')[0] || 'en',
        };

        // Send to n8n webhook with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
                signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`n8n webhook returned status ${response.status}: ${response.statusText}`);
            }

            // Log success
            console.log('✅ Newsletter subscription successful:', {
                email: validatedData.email,
                timestamp: payload.timestamp,
            });

            return NextResponse.json(
                {
                    success: true,
                    message: 'Subscribed successfully! Check your email for confirmation.',
                },
                {
                    status: 200,
                    headers: {
                        'X-RateLimit-Limit': rateLimitResult.limit.toString(),
                        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
                        'X-RateLimit-Reset': rateLimitResult.reset.toString(),
                    },
                }
            );
        } catch (fetchError) {
            clearTimeout(timeoutId);

            if (fetchError instanceof Error && fetchError.name === 'AbortError') {
                console.error('n8n webhook timeout');
                return NextResponse.json(
                    {
                        success: false,
                        error: 'Request timeout. Please try again.',
                    },
                    { status: 504 }
                );
            }

            throw fetchError;
        }
    } catch (error) {
        console.error('Newsletter subscription error:', error);

        // Don't expose internal error details to client
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to subscribe. Please try again later.',
            },
            { status: 500 }
        );
    }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
    return NextResponse.json(
        {},
        {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        }
    );
}

