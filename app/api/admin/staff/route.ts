
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";

async function generateUniqueCode(region: string = "HQ") {
  let code = "";
  let isUnique = false;
  let attempts = 0;
  const regionCode = (region || "HQ").toUpperCase().substring(0, 3).padEnd(3, 'X');

  while (!isUnique && attempts < 50) {
    const num = Math.floor(100 + Math.random() * 900);
    code = `PC-${regionCode}-${num}`;
    const existing = await prisma.staff.findUnique({ where: { code } });
    if (!existing) isUnique = true;
    attempts++;
  }
  return code;
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { region } = await req.json();
    const code = await generateUniqueCode(region);
    const newStaff = await prisma.staff.create({ data: { code } });
    return NextResponse.json(newStaff);
  } catch (error) {
    console.error("Staff Creation Error:", error);
    return NextResponse.json({ error: "Failed to generate staff code" }, { status: 500 });
  }
}
