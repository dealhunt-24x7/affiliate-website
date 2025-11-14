import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/options";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email || !session.user.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const body = await req.json();
    // optional: allow body override but prefer session
    const userId = session.user.id;
    const email = session.user.email;

    // Prevent duplicate requests
    const existing = await prisma.deleteRequest.findUnique({ where: { userId } });
    if (existing) {
      return NextResponse.json({ success: true, message: "Request already submitted" });
    }

    const rec = await prisma.deleteRequest.create({
      data: { userId, email },
    });

    return NextResponse.json({ success: true, id: rec.id });
  } catch (err: any) {
    console.error("DeleteRequest error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
      }
