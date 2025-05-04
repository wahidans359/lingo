import { NextResponse } from "next/server";
import db from "@/db/drizzle";
  
import { isAdmin } from "@/lib/admin";
import { courses } from "@/db/schema";

export const GET = async() => {
    const admin = await isAdmin();
    if(!admin) return NextResponse.json("Unauthorized",{status:403});
    const data = await db.query.courses.findMany();
    return NextResponse.json(data);
}
export const POST = async(req:Request) => {
    const admin = await isAdmin();
    if(!admin) return NextResponse.json("Unauthorized",{status:403});

    const body = await req.json();
    const data = await db.insert(courses).values(
        {
            ...body
        }
    ).returning();
    return NextResponse.json(data[0]);
}