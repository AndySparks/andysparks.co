import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const AUDIENCE_ID = "aff60c34-aad3-4f91-9875-7e2c6ee50fc3";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email } = body;

  if (!email) {
    return NextResponse.json(
      { error: "Email is required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server misconfiguration." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.contacts.create({
      audienceId: AUDIENCE_ID,
      email,
      unsubscribed: false,
    });

    await resend.emails.send({
      from: "Andy Sparks <hi@andysparks.co>",
      to: email,
      subject: "Welcome — you're in",
      text: [
        "Thanks for subscribing!",
        "",
        "I write about startups, coaching, craft, and human flourishing. You'll hear from me when I publish something new — no spam, no fluff.",
        "",
        "In the meantime, you can browse past essays at https://andysparks.co/essays",
        "",
        "Cheers,",
        "Andy",
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
