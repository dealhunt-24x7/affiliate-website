// app/api/contact/route.ts
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message) return NextResponse.json({ error: "Missing" }, { status: 400 });
  const rec = await prisma.contact.create({ data: { name, email, message } });
  return NextResponse.json({ success: true, id: rec.id });
}
