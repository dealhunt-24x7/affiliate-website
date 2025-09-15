import { NextResponse } from "next/server";
import products from "@/data/products.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  let filtered = products;

  if (category) {
    filtered = products.filter(
      (p: any) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  return NextResponse.json(filtered);
}
