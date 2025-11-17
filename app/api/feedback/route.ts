import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, message } = await req.json();

    if (!name || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const rec = await prisma.feedback.create({
      data: { name, message },
    });

    return NextResponse.json({ success: true, id: rec.id });
  } catch (err) {
    console.error("Feedback error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
