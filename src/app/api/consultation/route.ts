import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone } = body;

  // Log to Vercel function logs — visible in the Vercel dashboard
  console.log("=== NEW CONSULTATION REQUEST ===");
  console.log(JSON.stringify({ name, email, phone, timestamp: new Date().toISOString() }));
  console.log("================================");

  // TODO: Wire up to your preferred destination:
  // - Send email via Resend/SendGrid
  // - Save to Supabase/Airtable
  // - Post to Slack webhook
  // - Add to CRM

  return NextResponse.json({ ok: true });
}
