import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import authOptions from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { randomBytes } from "crypto";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user?.email) return res.status(401).json({ error: "Not authenticated" });

    const user = await prisma.user.findUnique({ where: { email: session.user?.email! } });
    if (!user) return res.status(404).json({ error: "User not found" });

    let ref = await prisma.referral.findFirst({ where: { referredBy: user.id } });
    if (!ref) {
      const code = `DH-${randomBytes(3).toString("hex").toUpperCase()}`;
      ref = await prisma.referral.create({ data: { code, referredBy: user.id, reward: 0 } });
    }

    const totalRefs = await prisma.referral.count({ where: { referredBy: user.id } });
    const successful = await prisma.referral.count({ where: { referredBy: user.id, joinedUser: { not: null } } });
    const totalRewardsAgg = await prisma.referral.aggregate({ where: { referredBy: user.id }, _sum: { reward: true } });

    return res.json({
      code: ref.code,
      link: `${process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXTAUTH_URL}/ref/${ref.code}`,
      stats: { totalRefs, successful, totalRewards: totalRewardsAgg._sum.reward || 0 }
    });
  }

  if (req.method === "POST") {
    const { code, joinedUserId } = req.body || {};
    if (!code || !joinedUserId) return res.status(400).json({ error: "Missing fields" });

    const ref = await prisma.referral.findUnique({ where: { code } });
    if (!ref) return res.status(404).json({ error: "Referral not found" });

    const reward = 50;
    await prisma.$transaction(async (tx) => {
      await tx.referral.update({ where: { code }, data: { joinedUser: joinedUserId, reward } });

      const wallet = await tx.wallet.upsert({
        where: { userId: ref.referredBy },
        update: { pending: { increment: reward } },
        create: { userId: ref.referredBy, pending: reward, available: 0, withdrawn: 0 }
      });

      await tx.transaction.create({
        data: { walletId: wallet.id, type: "Credit", amount: reward, description: `Referral reward for ${joinedUserId}` }
      });
    });

    return res.json({ success: true });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end("Method Not Allowed");
                                     }
