import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { User } from "@/models/User";
import { verifyToken } from "@/lib/auth";

export async function GET(req: Request) {
    try {
        const authHeader = req.headers.get("authorization");
        const decoded = verifyToken(authHeader);

        if (!decoded) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await connectToDatabase();

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ user }, { status: 200 });
    } catch (error: unknown) {
        console.error("Profile error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
