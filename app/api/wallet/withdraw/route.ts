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

    const wallet = await prisma.wallet.findUnique({
      where: { userId },
    });

    if (!wallet || wallet.balance < amount) {
      return NextResponse.json(
        { error: "Insufficient balance" },
        { status: 400 }
      );
    }

    await prisma.wallet.update({
      where: { userId },
      data: { balance: { decrement: amount } },
    });

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
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
