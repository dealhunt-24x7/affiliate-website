import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body || {};
  if (!name || !email || !message) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const rec = await prisma.contact.create({ data: { name, email, message } });
  return NextResponse.json({ success: true, id: rec.id });
}
