import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "../../../../utils/auth";
import dbConnect from "../../../../lib/mongodb";
import User from "../../../../models/User";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("auth_token")?.value;
    if(!token) throw new Error("Unauthorized");
    const payload: any = await verifyToken(token);
    
    if (payload.userId === "admin_env") {
      return NextResponse.json({ user: { name: "System Admin", email: "admin@renukiran.org", role: "admin" }});
    }

    await dbConnect();
    const user = await User.findById(payload.userId);
    if (!user) throw new Error("User missing");

    return NextResponse.json({ user: { name: user.name, email: user.email }});
  } catch(e) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
