import { NextResponse } from "next/server";
import { auth } from "@auth/core";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const session = await auth({ req });
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const userId = session.user.id;

    const referral = await prisma.referral.findUnique({
      where: { userId },
      include: { referredUsers: true },
    });

    return NextResponse.json({ success: true, data: referral });
  } catch (err) {
    console.error("Referral error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
