import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const email = session.user.email;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  let wallet = await prisma.wallet.findUnique({
    where: { userId: user.id },
    include: { transactions: { orderBy: { createdAt: "desc" }, take: 50 } },
  });

  // create wallet if not exists
  if (!wallet) {
    wallet = await prisma.wallet.create({
      data: { userId: user.id, available: 0, pending: 0, withdrawn: 0 },
      include: { transactions: true },
    });
  }

  const result = {
    summary: {
      available: wallet.available,
      pending: wallet.pending,
      withdrawn: wallet.withdrawn,
      totalEarned: wallet.available + wallet.pending + wallet.withdrawn,
    },
    transactions: wallet.transactions.map((t) => ({
      id: t.id,
      date: t.createdAt,
      description: t.description,
      type: t.type,
      amount: t.amount,
    })),
  };

  return NextResponse.json(result);
             }
