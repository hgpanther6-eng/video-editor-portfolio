import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// =============================================
// CONTACT FORM API ROUTE
// =============================================
// This endpoint receives form submissions and emails them to the
// configured CONTACT_EMAIL address.
//
// Required environment variables (add to .env.local):
//   SMTP_HOST=        e.g. smtp.gmail.com
//   SMTP_PORT=        e.g. 587
//   SMTP_USER=        Your SMTP username / Gmail address
//   SMTP_PASS=        Your SMTP password / Gmail App Password
//   CONTACT_EMAIL=    Where to send inquiries (can be same as SMTP_USER)
//
// Gmail setup:
//   1. Enable 2FA on your Google account.
//   2. Go to myaccount.google.com > Security > App Passwords.
//   3. Generate an App Password and use it as SMTP_PASS.
//   4. SMTP_HOST=smtp.gmail.com  SMTP_PORT=587

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  deadline?: string;
  description: string;
  website?: string; // honeypot
};

function validate(payload: ContactPayload): string | null {
  if (!payload.name?.trim()) return 'Name is required.';
  if (!payload.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email))
    return 'A valid email address is required.';
  if (!payload.projectType?.trim()) return 'Project type is required.';
  if (!payload.description?.trim() || payload.description.trim().length < 20)
    return 'Please provide a project description of at least 20 characters.';
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const payload: ContactPayload = await req.json();

    // Honeypot
    if (payload.website) {
      return NextResponse.json({ ok: true }); // silently reject bots
    }

    const validationError = validate(payload);
    if (validationError) {
      return NextResponse.json({ message: validationError }, { status: 400 });
    }

    // Check env vars are configured
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
      console.error('Email delivery not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_EMAIL in .env.local');
      return NextResponse.json(
        {
          message:
            'Email delivery is not configured yet. Please contact Ronak directly at the email address listed on the page.',
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 587),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const emailHtml = `
      <div style="font-family: system-ui, sans-serif; max-width: 640px; margin: 0 auto; padding: 32px; background: #f5f3ef; color: #1a1a18;">
        <h1 style="font-size: 20px; font-weight: 600; margin-bottom: 24px; border-bottom: 1px solid rgba(26,26,24,0.1); padding-bottom: 16px;">
          New Project Inquiry — Ronak Gadhavi Portfolio
        </h1>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          ${[
            ['Name', payload.name],
            ['Email', payload.email],
            ['Company', payload.company || '—'],
            ['Project Type', payload.projectType],
            ['Estimated Budget', payload.budget || '—'],
            ['Deadline / Timeline', payload.deadline || '—'],
          ]
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding: 10px 0; color: #6b6b66; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; width: 140px; vertical-align: top; border-bottom: 1px solid rgba(26,26,24,0.06);">${label}</td>
              <td style="padding: 10px 0; color: #1a1a18; border-bottom: 1px solid rgba(26,26,24,0.06);">${value}</td>
            </tr>`
            )
            .join('')}
        </table>

        <div style="margin-top: 24px;">
          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #6b6b66; margin-bottom: 8px;">Project Description</p>
          <p style="font-size: 14px; color: #1a1a18; line-height: 1.6; white-space: pre-wrap;">${payload.description}</p>
        </div>

        <p style="margin-top: 32px; font-size: 12px; color: #6b6b66; border-top: 1px solid rgba(26,26,24,0.08); padding-top: 16px;">
          Sent from ronakgadhavi.com contact form
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${payload.name}" <${SMTP_USER}>`,
      replyTo: payload.email,
      to: CONTACT_EMAIL,
      subject: `New project inquiry: ${payload.projectType} — ${payload.name}`,
      html: emailHtml,
      text: `
New Project Inquiry

Name: ${payload.name}
Email: ${payload.email}
Company: ${payload.company || '—'}
Project Type: ${payload.projectType}
Budget: ${payload.budget || '—'}
Deadline: ${payload.deadline || '—'}

Description:
${payload.description}
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { message: 'An unexpected error occurred. Please try again or contact me directly.' },
      { status: 500 }
    );
  }
}
