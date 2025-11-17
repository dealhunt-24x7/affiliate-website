import { NextResponse } from "next/server";
import { auth } from "@auth/core";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await auth({ req });

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { amount, method } = await req.json();
    const userId = session.user.id;

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const wallet = await prisma.wallet.findUnique({ where: { userId } });
    if (!wallet) {
      return NextResponse.json({ error: "Wallet not found" }, { status: 404 });
    }

    if (wallet.available < amount) {
      return NextResponse.json({ error: "Insufficient balance" }, { status: 400 });
    }

    await prisma.wallet.update({
      where: { userId },
      data: {
        available: { decrement: amount },
        withdrawn: { increment: amount },
      },
    });

    await prisma.withdraw.create({
      data: { userId, amount, method, status: "pending" },
    });

    return NextResponse.json({ success: true, message: "Withdraw request submitted" });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
