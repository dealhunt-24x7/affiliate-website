import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/options";
import prisma from "@/lib/prisma";

export async function POST() {
  try {
    const session = await getServerSession(authOptions);

    // ❗  Authentication check
    if (!session || !session.user || !session.user.email) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    const user = session.user;

    // email type: string | null → safe convert
    const email = user.email || "";

    // ❗  Assume user.id aapke NextAuth JWT me already aa raha hai
    // Agar nahi aa raha to main aapko uska fix bhi de dunga
    const userId = (user as any).id; 
    if (!userId) {
      return NextResponse.json(
        { error: "User ID missing in session" },
        { status: 400 }
      );
    }

    // Save/Delete request
    await prisma.deleteRequest.upsert({
      where: { userId },
      update: { email },
      create: { userId, email },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete request error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
