import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { FoodDonation } from "@/models/FoodDonation";
import { NGORequest } from "@/models/NGORequest";
import { verifyToken } from "@/lib/auth";
import { sendNotification } from "@/lib/novu";
import { User } from "@/models/User";

export async function POST(req: Request) {
    try {
        const authHeader = req.headers.get("authorization");
        const decoded = verifyToken(authHeader);

        if (!decoded || decoded.role !== "ngo") {
            return NextResponse.json({ error: "Unauthorized. Only NGOs can accept donations." }, { status: 403 });
        }

        const { donationId, pickupTime } = await req.json();

        if (!donationId) {
            return NextResponse.json({ error: "Missing donationId" }, { status: 400 });
        }

        await connectToDatabase();

        const donation = await FoodDonation.findById(donationId);

        if (!donation) {
            return NextResponse.json({ error: "Donation not found" }, { status: 404 });
        }

        if (donation.status !== "pending") {
            return NextResponse.json({ error: "Donation is no longer available" }, { status: 400 });
        }

        if (new Date(donation.expiryTime) < new Date()) {
            donation.status = "expired";
            await donation.save();
            return NextResponse.json({ error: "Donation has expired" }, { status: 400 });
        }

        // Update donation status
        donation.status = "accepted";
        await donation.save();

        // Create NGO Request record
        const request = await NGORequest.create({
            donationId,
            ngoId: decoded.userId,
            status: "accepted",
            pickupTime: pickupTime ? new Date(pickupTime) : undefined,
        });

        const ngoUser = await User.findById(decoded.userId);

        // Notify the Donor
        await sendNotification({
            userId: donation.donorId.toString(),
            workflowId: "donation-accepted",
            payload: { donationName: donation.foodName, ngoName: ngoUser?.name },
            message: `Your donation of ${donation.foodName} has been accepted by ${ngoUser?.name || "an NGO"}!`,
            type: "success"
        });

        return NextResponse.json({
            message: "Donation accepted successfully",
            request,
        }, { status: 200 });
    } catch (error: unknown) {
        console.error("Accept donation error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
