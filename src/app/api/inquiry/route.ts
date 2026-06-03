import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name: string;
  company?: string;
  email: string;
  country?: string;
  message?: string;
  items: { slug: string; title: string; qty: number }[];
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Payload;
    if (!data?.email || !Array.isArray(data.items)) {
      return NextResponse.json({ ok: false, error: "Invalid" }, { status: 400 });
    }
    // TODO: wire to SMTP / SendGrid / Resend / Lark webhook.
    // For now: log on the server. Replace with mail sender when ready.
    console.log("[Hehui Inquiry]", {
      at: new Date().toISOString(),
      ...data,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Hehui Inquiry] failed", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
