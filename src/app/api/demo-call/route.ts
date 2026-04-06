import { NextResponse } from "next/server";

const AGENT_ID = "agent_7501knj7cjgqfxja8qtyysttqxgh";
const PHONE_NUMBER_ID = "phnum_4501knj8c8ggfrv86p81sy5x6tx5";

export async function POST(request: Request) {
  const body = await request.json();
  const { phone } = body;

  if (!phone) {
    return NextResponse.json({ error: "Phone number required" }, { status: 400 });
  }

  // Normalize phone number — add +1 if no country code
  let normalized = phone.replace(/[^\d+]/g, "");
  if (!normalized.startsWith("+")) {
    normalized = "+1" + normalized;
  }

  console.log("=== DEMO CALL REQUEST ===");
  console.log(JSON.stringify({ phone: normalized, timestamp: new Date().toISOString() }));

  try {
    const res = await fetch(
      "https://api.elevenlabs.io/v1/convai/twilio/outbound-call",
      {
        method: "POST",
        headers: {
          "xi-api-key": process.env.ELEVENLABS_API_KEY!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agent_id: AGENT_ID,
          agent_phone_number_id: PHONE_NUMBER_ID,
          to_number: normalized,
        }),
      }
    );

    if (!res.ok) {
      const error = await res.text();
      console.error("ElevenLabs call error:", error);
      return NextResponse.json({ error: "Failed to initiate call" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json({ ok: true, conversation_id: data.conversation_id });
  } catch (error) {
    console.error("Call error:", error);
    return NextResponse.json({ error: "Failed to initiate call" }, { status: 500 });
  }
}
