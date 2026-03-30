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

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
