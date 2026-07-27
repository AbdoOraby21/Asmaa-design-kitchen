import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { newsletter } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await db.insert(newsletter).values({ email }).onConflictDoNothing();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
