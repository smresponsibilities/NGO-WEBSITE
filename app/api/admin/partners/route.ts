import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import Partner from "../../../../models/Partner";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await dbConnect();
    const partners = await Partner.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ data: partners });
  } catch (e: any) {
    return NextResponse.json({ data: [], error: e.message });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    const partner = await Partner.create(data);
    return NextResponse.json({ success: true, data: partner });
  } catch(e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { id } = await req.json();
    import("../../../../models/Partner").then(async ({ default: Partner }) => {
       await Partner.findByIdAndDelete(id);
    });
    return NextResponse.json({ success: true });
  } catch(e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
