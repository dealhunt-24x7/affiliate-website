import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import authOptions from "@/lib/authOptions";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end("Method Not Allowed");
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) return res.status(401).json({ error: "Not authenticated" });

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return res.status(404).json({ error: "User not found" });

  let wallet = await prisma.wallet.findUnique({
    where: { userId: user.id },
    include: { transactions: { orderBy: { createdAt: "desc" }, take: 50 } }
  });

  if (!wallet) {
    wallet = await prisma.wallet.create({
      data: { userId: user.id, available: 0, pending: 0, withdrawn: 0 },
      include: { transactions: true }
    });
  }

  return res.json({
    summary: {
      available: wallet.available,
      pending: wallet.pending,
      withdrawn: wallet.withdrawn,
      totalEarned: wallet.available + wallet.pending + wallet.withdrawn
    },
    transactions: wallet.transactions.map((t) => ({
      id: t.id,
      date: t.createdAt,
      description: t.description,
      type: t.type,
      amount: t.amount
    }))
  });
    }
