import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User";
import { hashPassword } from "@/utils/hash";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    await connectToDB();

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashed = await hashPassword(password);
    const newUser = new User({ name, email, password: hashed });
    await newUser.save();

    return NextResponse.json({ message: "Signup successful" }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
