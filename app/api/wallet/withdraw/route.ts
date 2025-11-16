import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return Response.json({ error: "Not logged in" });

  const { amount } = await req.json();

  const wallet = await prisma.wallet.findUnique({
    where: { userId: session.user.id },
  });

  if (!wallet || wallet.balance < amount) {
    return Response.json({ error: "Insufficient balance" });
  }

  await prisma.wallet.update({
    where: { userId: session.user.id },
    data: { balance: wallet.balance - amount },
  });

  await prisma.withdraw.create({
    data: {
      userId: session.user.id,
      amount,
    },
  });

  return Response.json({ success: true });
}
