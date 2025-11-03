import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // ✅ fixed import path
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { randomBytes } from "crypto";

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email)
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  let ref = await prisma.referral.findFirst({
    where: { referredBy: user.id },
  });
  if (!ref) {
    const code = `DH-${randomBytes(3).toString("hex").toUpperCase()}`;
    ref = await prisma.referral.create({
      data: { code, referredBy: user.id, reward: 0 },
    });
  }

  const totalRefs = await prisma.referral.count({
    where: { referredBy: user.id },
  });
  const successful = await prisma.referral.count({
    where: { referredBy: user.id, joinedUser: { not: null } },
  });
  const totalRewards = await prisma.referral.aggregate({
    where: { referredBy: user.id },
    _sum: { reward: true },
  });

  return NextResponse.json({
    code: ref.code,
    link: `${process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXTAUTH_URL}/ref/${ref.code}`,
    stats: {
      totalRefs,
      successful,
      totalRewards: totalRewards._sum.reward || 0,
    },
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { code, joinedUserId } = body;
  if (!code || !joinedUserId)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const ref = await prisma.referral.findUnique({ where: { code } });
  if (!ref)
    return NextResponse.json({ error: "Referral not found" }, { status: 404 });

  const reward = 50;
  await prisma.referral.update({
    where: { code },
    data: { joinedUser: joinedUserId, reward },
  });

  const wallet = await prisma.wallet.upsert({
    where: { userId: ref.referredBy },
    update: { pending: { increment: reward } },
    create: {
      userId: ref.referredBy,
      pending: reward,
      available: 0,
      withdrawn: 0,
    },
  });

  await prisma.transaction.create({
    data: {
      walletId: wallet.id,
      type: "Credit",
      amount: reward,
      description: `Referral reward for ${joinedUserId}`,
    },
  });

  return NextResponse.json({ success: true });
}
