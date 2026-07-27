import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { calculatorLeads } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, length, width, material, countertop, accessories, estimatedPrice } = body;

    await db.insert(calculatorLeads).values({
      name: name || null,
      phone: phone || null,
      length: length || null,
      width: width || null,
      material: material || null,
      countertop: countertop || null,
      accessories: accessories || null,
      estimatedPrice: estimatedPrice || null,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Calculator lead error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
