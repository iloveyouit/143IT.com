import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { success: false, error: 'Valid email is required.' },
                { status: 400 }
            );
        }

        const webhookUrl = process.env.N8N_NEWSLETTER_WEBHOOK;

        if (!webhookUrl) {
            console.warn('N8N_NEWSLETTER_WEBHOOK is not defined');
            return NextResponse.json(
                { success: true, message: 'Subscribed (Simulation: Webhook not configured)' },
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
                email,
                source: '143it-website-newsletter',
                timestamp: new Date().toISOString(),
            }),
        });

        if (!response.ok) {
            throw new Error(`n8n webhook error: ${response.statusText}`);
        }

        return NextResponse.json({ success: true, message: 'Subscribed successfully' });
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to subscribe. Please try again later.' },
            { status: 500 }
        );
    }
}
