import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "../../../../utils/auth";
import dbConnect from "../../../../lib/mongodb";
import Order from "../../../../models/Order";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("auth_token")?.value;
    if(!token) throw new Error("Unauthorized");
    const payload: any = await verifyToken(token);
    
    if (payload.userId === "admin_env") {
      return NextResponse.json({ data: [] });
    }

    await dbConnect();
    const orders = await Order.find({ userId: payload.userId }).sort({ createdAt: -1 });
    return NextResponse.json({ data: orders });
  } catch(e) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
