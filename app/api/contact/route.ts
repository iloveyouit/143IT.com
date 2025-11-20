import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.N8N_CONTACT_WEBHOOK;

    if (!webhookUrl) {
      console.warn('N8N_CONTACT_WEBHOOK is not defined');
      // Simulate success in dev if no webhook is defined, but log warning
      // In production, this should probably error or fallback
      return NextResponse.json(
        { success: true, message: 'Message received (Simulation: Webhook not configured)' },
        { status: 200 }
      );
    }

    // Forward to n8n
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...body,
        source: '143it-website',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`n8n webhook error: ${response.statusText}`);
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
