import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import Order from "../../../../models/Order";
import User from "../../../../models/User";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const { orderId } = await params;
    await dbConnect();

    const order = await Order.findById(orderId).lean();
    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    if (!(order as any).certificateValidated) {
      return NextResponse.json(
        { error: "Certificate has not been validated yet" },
        { status: 403 }
      );
    }

    // Get user info
    const user = await User.findById((order as any).userId).lean();
    const userName = (user as any)?.name || "Valued Supporter";

    let certificateId = (order as any).certificateId;
    if (!certificateId) {
      certificateId = 'RK-' + require('crypto').randomBytes(4).toString('hex').toUpperCase();
      await Order.findByIdAndUpdate(orderId, { certificateId });
    }

    return NextResponse.json({
      certificateId,
      userName,
      trees: (order as any).trees,
      totalAmount: (order as any).totalAmount,
      createdAt: (order as any).createdAt,
      razorpayOrderId: (order as any).razorpayOrderId,
    });
  } catch (error) {
    console.error("Certificate API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate certificate" },
      { status: 500 }
    );
  }
}
