import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    const { amount, method } = await req.json();
    const userId = session.user.id;

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      );
    }

    // User ka wallet fetch
    const wallet = await prisma.wallet.findUnique({
      where: { userId },
    });

    if (!wallet) {
      return NextResponse.json(
        { error: "Wallet not found" },
        { status: 404 }
      );
    }

    // Check if available balance is enough
    if (wallet.available < amount) {
      return NextResponse.json(
        { error: "Insufficient balance" },
        { status: 400 }
      );
    }

    // Reduce available balance & increase withdrawn
    await prisma.wallet.update({
      where: { userId },
      data: {
        available: { decrement: amount },
        withdrawn: { increment: amount },
      },
    });

    // Create withdraw request
    await prisma.withdraw.create({
      data: {
        userId,
        amount,
        method,
        status: "pending",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Withdraw request submitted",
    });
  } catch (error) {
    console.error("WITHDRAW ERROR:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
