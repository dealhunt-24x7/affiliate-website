import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/option";
import prisma from "@/lib/prisma";

export async function POST() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const email = session.user.email;

    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await prisma.deleteRequest.upsert({
      where: { userId: user.id },
      update: {},
      create: { userId: user.id, email: user.email }
    });

    return NextResponse.json({ success: true });

  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
