import { NextResponse } from "next/server";
import products from "@/data/products.json";

export async function GET() {
  // ✅ Extract unique categories with name, slug, image
  const categories = products.map((item: any) => ({
    name: item.category.charAt(0).toUpperCase() + item.category.slice(1),
    slug: item.category,
    image: `/images/categories/${item.category}.jpg`, // ✅ apke project me ye image naming follow ho rahi ho to
  }));

  return NextResponse.json(categories);
}
