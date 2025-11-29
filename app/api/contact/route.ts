import { NextResponse } from 'next/server';
import { z } from 'zod';
import { checkRateLimit, getClientIdentifier } from '@/lib/rate-limit';

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),
  email: z
    .string()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters')
    .toLowerCase()
    .trim(),
  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .trim()
    .optional(),
  phone: z
    .string()
    .max(20, 'Phone number must be less than 20 characters')
    .trim()
    .optional(),
  service: z
    .string()
    .max(50, 'Service must be less than 50 characters')
    .trim()
    .optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters')
    .trim(),
});

// Rate limit configuration: 5 requests per 15 minutes
const RATE_LIMIT_CONFIG = {
  limit: 5,
  windowMs: 15 * 60 * 1000, // 15 minutes
};

/**
 * Sanitize string to prevent XSS and injection attacks
 */
function sanitizeString(str: string): string {
  return str
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
}

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
          error: 'Too many requests. Please try again later.',
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
    const validationResult = contactFormSchema.safeParse(body);

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

    // Sanitize all string fields
    const sanitizedData = {
      name: sanitizeString(validatedData.name),
      email: validatedData.email, // Email is already validated by zod
      company: validatedData.company ? sanitizeString(validatedData.company) : undefined,
      phone: validatedData.phone ? sanitizeString(validatedData.phone) : undefined,
      service: validatedData.service ? sanitizeString(validatedData.service) : undefined,
      message: sanitizeString(validatedData.message),
    };

    // Check if webhook URL is configured
    const webhookUrl = process.env.N8N_CONTACT_WEBHOOK;

    if (!webhookUrl) {
      console.warn('N8N_CONTACT_WEBHOOK is not defined');

      // In development, simulate success
      if (process.env.NODE_ENV === 'development') {
        console.log('📧 Contact form submission (DEV MODE):', sanitizedData);
        return NextResponse.json(
          {
            success: true,
            message: 'Message received (Development mode: Webhook not configured)',
          },
          { status: 200 }
        );
      }

      // In production, this is an error
      console.error('N8N_CONTACT_WEBHOOK not configured in production');
      return NextResponse.json(
        {
          success: false,
          error: 'Contact form is temporarily unavailable. Please email us directly at support@143it.com',
        },
        { status: 503 }
      );
    }

    // Prepare payload for n8n
    const payload = {
      ...sanitizedData,
      source: '143it-website',
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
      clientIp: clientId,
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
      console.log('✅ Contact form submitted successfully:', {
        name: sanitizedData.name,
        email: sanitizedData.email,
        timestamp: payload.timestamp,
      });

      return NextResponse.json(
        {
          success: true,
          message: 'Message sent successfully',
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
    console.error('Contact form error:', error);

    // Don't expose internal error details to client
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send message. Please try again later or contact us directly at support@143it.com',
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
