import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end("Method Not Allowed");
  }

  const { name, message } = req.body || {};
  if (!name || !message) return res.status(400).json({ error: "Missing fields" });

  const rec = await prisma.feedback.create({ data: { name, message } });
  res.json({ success: true, id: rec.id });
}
