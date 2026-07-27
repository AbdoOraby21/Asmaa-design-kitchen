import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { contacts } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, city, kitchenSize, preferredDate, notes } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    await db.insert(contacts).values({
      name,
      phone,
      city: city || null,
      kitchenSize: kitchenSize || null,
      preferredDate: preferredDate || null,
      notes: notes || null,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
