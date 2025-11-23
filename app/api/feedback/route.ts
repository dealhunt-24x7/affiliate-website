// app/api/feedback/route.ts
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, message } = await req.json();
  if (!name || !message) return NextResponse.json({ error: "Missing" }, { status: 400 });
  const rec = await prisma.feedback.create({ data: { name, message } });
  return NextResponse.json({ success: true, id: rec.id });
}
