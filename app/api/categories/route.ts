import { NextResponse } from "next/server";
import { categories } from "@/data/categoriesList"; // ✅ yaha se sari 17 categories import ho rahi hain

export async function GET() {
  try {
    return NextResponse.json(categories); // ✅ sari categories return
  } catch (error) {
    console.error("Error loading categories:", error);
    return NextResponse.json({ error: "Failed to load categories" }, { status: 500 });
  }
}
