import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { name: "Test Mobile", slug: "mobile", image: "/images/categories/mobile.png" },
    { name: "Test Laptop", slug: "laptop", image: "/images/categories/laptop.png" }
  ]);
}
