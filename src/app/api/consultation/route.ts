import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone } = body;

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    dateStyle: "medium",
    timeStyle: "short",
  });

  // Log to Vercel function logs as backup
  console.log("=== NEW CONSULTATION REQUEST ===");
  console.log(JSON.stringify({ name, email, phone, timestamp }));

  try {
    await resend.emails.send({
      from: "Citadel Leads <onboarding@resend.dev>",
      to: "alex@lightshifthealth.com",
      subject: `New consultation request: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px;">
          <h2 style="margin-bottom: 4px;">New Consultation Request</h2>
          <p style="color: #666; margin-top: 0;">${timestamp}</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 80px;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Phone</td>
              <td style="padding: 8px 0;">${phone || "Not provided"}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p style="color: #999; font-size: 13px;">From citadel landing page</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
  }

  return NextResponse.json({ ok: true });
}
