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

  // session.user may not have id property by default - we saved id into token/session callback earlier
  const userId = (session.user as any).id || null;
  const email = session.user?.email || "";

  if (!userId) {
    // If token/session doesn't carry id, fetch user by email
    const u = await prisma.user.findUnique({ where: { email } });
    if (!u) return res.status(404).json({ error: "User not found" });
    (session.user as any).id = u.id;
  }

  const uid = (session.user as any).id;

  await prisma.deleteRequest.upsert({
    where: { userId: uid },
    update: {},
    create: { userId: uid, email }
  });

  return res.json({ success: true });
             }
