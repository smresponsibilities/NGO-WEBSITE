import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import Order from "../../../../models/Order";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await dbConnect();
    const orders = await Order.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ data: orders });
  } catch (e: any) {
    return NextResponse.json({ data: [], error: e.message });
  }
}

export async function PUT(req: Request) {
  try {
    await dbConnect();
    const { orderId, validated } = await req.json();
    const order = await Order.findByIdAndUpdate(orderId, { certificateValidated: validated }, { new: true });
    return NextResponse.json({ success: true, data: order });
  } catch(e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
