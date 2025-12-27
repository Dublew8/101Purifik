
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { staffCode, rating, comment } = await req.json();
    
    // Security Rule: Validate staff code against database
    const staff = await prisma.staff.findUnique({
      where: { code: staffCode }
    });

    if (!staff) {
      // For the prototype, we might want to auto-create staff to allow testing
      // but the prompt says "must be validated against the database".
      // We'll return an error if the code is unrecognized.
      return NextResponse.json({ error: "Unauthorized Personnel Code" }, { status: 403 });
    }

    const entry = await prisma.rating.create({
      data: {
        staffCode,
        score: parseInt(rating),
        comment
      }
    });

    return NextResponse.json({ success: true, id: entry.id });
  } catch (err) {
    console.error("Rating API Error:", err);
    return NextResponse.json({ error: "Failed to log confidential audit" }, { status: 500 });
  }
}
