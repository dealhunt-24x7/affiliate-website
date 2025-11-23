import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import authOptions from "@/lib/authOptions";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end("Method Not Allowed");
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) return res.status(401).json({ error: "Not authenticated" });

  const { amount } = req.body || {};
  const value = Number(amount || 0);
  if (!value || value <= 0) return res.status(400).json({ error: "Invalid amount" });

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return res.status(404).json({ error: "User not found" });

  const wallet = await prisma.wallet.findUnique({ where: { userId: user.id } });
  if (!wallet) return res.status(404).json({ error: "Wallet not found" });
  if (value > wallet.available) return res.status(400).json({ error: "Insufficient funds" });

  const updated = await prisma.wallet.update({
    where: { userId: user.id },
    data: {
      available: { decrement: value },
      withdrawn: { increment: value },
      transactions: { create: { type: "Debit", amount: value, description: "Withdrawal request" } }
    }
  });

  return res.json({ success: true, wallet: { available: updated.available, withdrawn: updated.withdrawn } });
                                                        }
