import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { fullName, email, company, industry, description } = body;

    if (!fullName || !email || !company || !industry || !description) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Basic spam protection - check for suspicious patterns
    const suspiciousPatterns = [
      /viagra/i,
      /cialis/i,
      /casino/i,
      /lottery/i,
    ];

    const allText = `${fullName} ${email} ${company} ${description}`.toLowerCase();
    if (suspiciousPatterns.some(pattern => pattern.test(allText))) {
      return NextResponse.json(
        { error: 'Submission rejected' },
        { status: 400 }
      );
    }

    // TODO: In production, integrate with email service (SendGrid, Resend, etc.)
    // For now, we'll just log the submission
    console.log('Contact form submission:', {
      fullName,
      email,
      company,
      industry,
      description,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email notification
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@aiagent.studio',
    //   to: 'hello@aiagent.studio',
    //   subject: `New Contact Form Submission from ${fullName}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${fullName}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company}</p>
    //     <p><strong>Industry:</strong> ${industry}</p>
    //     <p><strong>Description:</strong></p>
    //     <p>${description}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
