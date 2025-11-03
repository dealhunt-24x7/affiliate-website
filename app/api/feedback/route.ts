
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, message } = body || {};
  if (!name || !message) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const rec = await prisma.feedback.create({ data: { name, message } });
  return NextResponse.json({ success: true, id: rec.id });
}
