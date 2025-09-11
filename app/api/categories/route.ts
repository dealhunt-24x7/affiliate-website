import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

export async function GET() {
  try {
    // File path generate
    const filePath = path.join(process.cwd(), "data", "categories.json");

    // Read & parse file
    const jsonData = readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error loading categories:", error);
    return NextResponse.json(
      { error: "Failed to load categories" },
      { status: 500 }
    );
  }
}
