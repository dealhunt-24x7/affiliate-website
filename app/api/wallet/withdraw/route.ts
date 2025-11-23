// app/api/wallet/withdraw/route.ts
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/options";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { amount } = await req.json();
  const value = Number(amount || 0);
  if (!value || value <= 0) return NextResponse.json({ error: "Invalid amount" }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const wallet = await prisma.wallet.findUnique({ where: { userId: user.id } });
  if (!wallet) return NextResponse.json({ error: "Wallet not found" }, { status: 404 });

  if (value > wallet.available) return NextResponse.json({ error: "Insufficient funds" }, { status: 400 });

  const updated = await prisma.wallet.update({
    where: { userId: user.id },
    data: {
      available: { decrement: value },
      withdrawn: { increment: value },
      transactions: {
        create: {
          type: "Debit",
          amount: value,
          description: "Withdrawal request",
        },
      },
    },
  });

  return NextResponse.json({ success: true, wallet: { available: updated.available, withdrawn: updated.withdrawn } });
    }
