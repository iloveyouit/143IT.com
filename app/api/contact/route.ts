import { NextResponse } from 'next/server';

// Simple rate limiting (in-memory, for demo - use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    // Reset or create new limit (5 requests per 15 minutes)
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + 15 * 60 * 1000, // 15 minutes
    });
    return true;
  }

  if (limit.count < 5) {
    limit.count++;
    return true;
  }

  return false; // Rate limit exceeded
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate and sanitize input
function validateContactForm(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Name validation
  if (!data.name || typeof data.name !== 'string') {
    errors.push('Name is required');
  } else if (data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  } else if (data.name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  // Email validation
  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required');
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.push('Invalid email format');
  } else if (data.email.length > 255) {
    errors.push('Email must be less than 255 characters');
  }

  // Company validation (optional)
  if (data.company && typeof data.company === 'string' && data.company.length > 100) {
    errors.push('Company name must be less than 100 characters');
  }

  // Message validation
  if (!data.message || typeof data.message !== 'string') {
    errors.push('Message is required');
  } else if (data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  } else if (data.message.length > 5000) {
    errors.push('Message must be less than 5000 characters');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please try again later.' 
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate input
    const validation = validateContactForm(body);
    if (!validation.valid) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed', 
          errors: validation.errors 
        },
        { status: 400 }
      );
    }

    // Sanitize data
    const sanitizedData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      company: body.company ? body.company.trim() : '',
      message: body.message.trim(),
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

    // Check if n8n webhook URL is configured
    const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.warn('N8N_CONTACT_WEBHOOK_URL not configured. Form data:', sanitizedData);
      
      // In development, just log and return success
      if (process.env.NODE_ENV === 'development') {
        console.log('📨 Contact form submission (dev mode):', sanitizedData);
        return NextResponse.json({ 
          success: true, 
          message: 'Form received (development mode - no webhook configured)' 
        });
      }
      
      // In production, return error if webhook not configured
      return NextResponse.json(
        { 
          success: false, 
          error: 'Contact form is not configured. Please email support@143it.com directly.' 
        },
        { status: 503 }
      );
    }

    // Send to n8n webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sanitizedData),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Webhook returned status ${webhookResponse.status}`);
    }

    // Success
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for contacting us! We\'ll get back to you soon.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit form. Please try again or email support@143it.com directly.' 
      },
      { status: 500 }
    );
  }
}

// Prevent GET requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

