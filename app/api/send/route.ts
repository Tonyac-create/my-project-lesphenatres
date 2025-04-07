import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/app/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();
    const [firstName, lastName] = name.split(' ');

    const data = await resend.emails.send({
      from: 'Les Phénâtres <onboarding@resend.dev>',
      to: 'angelique.copere@free-dev.fr',
      subject: `Nouveau message de ${name}`,
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        phone,
        message,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error)
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
