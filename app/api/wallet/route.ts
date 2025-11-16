import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return Response.json({ error: "Not logged in" });

  const wallet = await prisma.wallet.findUnique({
    where: { userId: session.user.id },
  });

  return Response.json(wallet);
}
