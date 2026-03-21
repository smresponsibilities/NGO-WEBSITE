import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import Tree from "../../../../models/Tree";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await dbConnect();
    const trees = await Tree.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ data: trees });
  } catch (e: any) {
    return NextResponse.json({ data: [], error: e.message });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    const tree = await Tree.create(data);
    return NextResponse.json({ success: true, data: tree });
  } catch(e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { id } = await req.json();
    import("../../../../models/Tree").then(async ({ default: Tree }) => {
       await Tree.findByIdAndDelete(id);
    });
    return NextResponse.json({ success: true });
  } catch(e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
