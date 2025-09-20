import { NextResponse } from "next/server";
import products from "@/data/products.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  if (category) {
    const filtered = products.filter((item: any) => item.category === category);
    return NextResponse.json(filtered);
  }

  return NextResponse.json(products);
}
