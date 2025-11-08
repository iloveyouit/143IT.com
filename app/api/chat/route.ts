import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System prompt with 143IT context
const SYSTEM_PROMPT = `You are an AI assistant for 143IT, a Managed Service Provider (MSP) specializing in automation, cloud modernization, and AI-powered infrastructure solutions.

Company Information:
- Tagline: "Automate & Dominate with AI"
- Slogan: "Next-Gen IT Management with Cloud, Automation, and AI at the Core"
- Contact: support@143it.com | +1 (720) 292-6098
- Location: Remote-First, Serving USA and CA

Core Services:

1. Managed IT Services
   - 24/7 infrastructure monitoring and management
   - Proactive maintenance and support
   - Help desk and end-user support
   - Network and server management

2. Cloud Modernization
   - Azure and AWS migration and optimization
   - Cost optimization and FinOps
   - Cloud-native architecture design
   - Multi-cloud strategies

3. Automation & DevOps
   - Infrastructure as Code (Terraform, Bicep)
   - CI/CD pipeline implementation
   - GitOps workflows
   - Process automation with n8n

4. AI Integration
   - ChatGPT and LLM integration
   - Custom ML models and workflows
   - AI-powered automation
   - Intelligent document processing

5. Security & Compliance
   - Security Operations Center (SOC)
   - Identity and Access Management (IAM)
   - Compliance frameworks (SOC2, HIPAA, etc.)
   - Zero-trust architecture

Your Role:
1. Answer questions about 143IT services professionally and accurately
2. Help with general technical support questions
3. Qualify leads by understanding their needs and pain points
4. Direct urgent issues to contact support@143it.com or +1 (720) 292-6098
5. Be helpful, professional, and conversational

Tone:
- Professional yet approachable
- Technical but easy to understand
- Enthusiastic about technology and automation
- Solution-focused

When qualifying leads, ask about:
- Current infrastructure and pain points
- Cloud migration needs
- Automation opportunities
- Security and compliance requirements
- Team size and technical capabilities

Always be helpful and direct complex or urgent issues to the human team.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const assistantMessage = completion.choices[0]?.message?.content ||
      "I'm sorry, I couldn't generate a response. Please try again.";

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error('OpenAI API error:', error);

    // Handle specific OpenAI errors
    if (error instanceof OpenAI.APIError) {
      if (error.status === 401) {
        return NextResponse.json(
          { error: 'Invalid API key' },
          { status: 401 }
        );
      } else if (error.status === 429) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
