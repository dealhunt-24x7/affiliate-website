import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/options";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { randomBytes } from "crypto";

const REWARD_PERCENT = 0.4; // 40% of merchant profit
const REWARD_CAP = 50;      // Max ₹50 per referral

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email)
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Check or create referral code
  let ref = await prisma.referral.findFirst({
    where: { referredBy: user.id },
  });

  if (!ref) {
    const code = `DH-${randomBytes(3).toString("hex").toUpperCase()}`;
    ref = await prisma.referral.create({
      data: { code, referredBy: user.id, reward: 0 },
    });
  }

  const [totalRefs, successful, totalRewards] = await Promise.all([
    prisma.referral.count({ where: { referredBy: user.id } }),
    prisma.referral.count({
      where: { referredBy: user.id, joinedUser: { not: null } },
    }),
    prisma.referral.aggregate({
      where: { referredBy: user.id },
      _sum: { reward: true },
    }),
  ]);

  return NextResponse.json({
    code: ref.code,
    link: `${process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXTAUTH_URL}/ref/${ref.code}`,
    stats: {
      totalRefs,
      successful,
      totalRewards: totalRewards._sum.reward || 0,
    },
    rewardPolicy: {
      percent: REWARD_PERCENT * 100,
      maxReward: REWARD_CAP,
    },
  });
}

// --------------------------
// Reward Credit after Purchase
// --------------------------
export async function POST(req: Request) {
  const { code, joinedUserId, merchantProfit } = await req.json();

  if (!code || !joinedUserId || !merchantProfit)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const ref = await prisma.referral.findUnique({ where: { code } });
  if (!ref)
    return NextResponse.json({ error: "Referral not found" }, { status: 404 });

  // Dynamic reward logic
  const reward = Math.min(merchantProfit * REWARD_PERCENT, REWARD_CAP);

  if (reward <= 0)
    return NextResponse.json({ error: "No profit to share" }, { status: 400 });

  await prisma.$transaction(async (tx) => {
    await tx.referral.update({
      where: { code },
      data: { joinedUser: joinedUserId, reward },
    });

    const wallet = await tx.wallet.upsert({
      where: { userId: ref.referredBy },
      update: { pending: { increment: reward } },
      create: {
        userId: ref.referredBy,
        available: 0,
        pending: reward,
        withdrawn: 0,
      },
    });

    await tx.transaction.create({
      data: {
        walletId: wallet.id,
        type: "Credit",
        amount: reward,
        description: `Referral reward for user ${joinedUserId} (Profit: ₹${merchantProfit})`,
      },
    });
  });

  return NextResponse.json({ success: true, reward });
        }
