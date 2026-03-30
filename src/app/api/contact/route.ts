import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message, website } = body;
  const turnstileToken = body["cf-turnstile-response"];

  // Honeypot check — if the hidden field has a value, it's a bot
  if (website) {
    // Return 200 so bots think it worked
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // Verify Turnstile token — fail closed if secret is missing
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (!turnstileSecret) {
    return NextResponse.json(
      { error: "Server misconfiguration." },
      { status: 500 }
    );
  }

  const verification = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: turnstileSecret,
        response: turnstileToken || "",
      }),
    }
  );
  const result = await verification.json();
  if (!result.success) {
    return NextResponse.json(
      { error: "Verification failed. Please try again." },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Contact Form <contact@andysparks.co>",
      to: "hi@andysparks.co",
      replyTo: email,
      subject: `Contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
