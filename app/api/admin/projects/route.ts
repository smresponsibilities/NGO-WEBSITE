import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import Project from "../../../../models/Project";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ data: projects });
  } catch (e: any) {
    return NextResponse.json({ data: [], error: e.message });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    const project = await Project.create(data);
    return NextResponse.json({ success: true, data: project });
  } catch(e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function PUT(req: Request) {
  try {
    await dbConnect();
    const { projectId, action, amount } = await req.json();
    if (action === "addTrees") {
      const project = await Project.findByIdAndUpdate(projectId, { $inc: { treesPlanted: amount } }, { new: true });
      return NextResponse.json({ success: true, data: project });
    }
    return NextResponse.json({ error: "Invalid action" });
  } catch(e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { id } = await req.json();
    await Project.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch(e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
