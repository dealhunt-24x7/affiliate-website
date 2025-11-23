// app/api/wallet/route.ts
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/options";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  let wallet = await prisma.wallet.findUnique({
    where: { userId: user.id },
    include: { transactions: { orderBy: { createdAt: "desc" }, take: 50 } },
  });

  if (!wallet) {
    wallet = await prisma.wallet.create({ data: { userId: user.id, available: 0, pending: 0, withdrawn: 0 }, include: { transactions: true } });
  }

  const summary = {
    available: wallet.available,
    pending: wallet.pending,
    withdrawn: wallet.withdrawn,
    totalEarned: wallet.available + wallet.pending + wallet.withdrawn,
  };

  const transactions = wallet.transactions.map((t) => ({ id: t.id, date: t.createdAt, description: t.description, type: t.type, amount: t.amount }));

  return NextResponse.json({ summary, transactions });
      }
