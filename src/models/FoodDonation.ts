import mongoose, { Schema, Document } from "mongoose";

export interface IFoodDonation extends Document {
    donorId: mongoose.Types.ObjectId;
    foodName: string;
    foodType: string;
    quantity: string;
    expiryTime: Date;
    pickupLocation: string;
    description?: string;
    imageUrl?: string;
    status: "pending" | "accepted" | "completed" | "expired";
    createdAt: Date;
}

const FoodDonationSchema = new Schema(
    {
        donorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        foodName: { type: String, required: true },
        foodType: { type: String, required: true },
        quantity: { type: String, required: true },
        expiryTime: { type: Date, required: true },
        pickupLocation: { type: String, required: true },
        description: { type: String },
        imageUrl: { type: String },
        status: { type: String, enum: ["pending", "accepted", "completed", "expired"], default: "pending" },
    },
    { timestamps: true }
);

// Indexes to speed up location and active donations fetching
FoodDonationSchema.index({ status: 1, expiryTime: 1 });
FoodDonationSchema.index({ donorId: 1 });

export const FoodDonation = mongoose.models.FoodDonation || mongoose.model<IFoodDonation>("FoodDonation", FoodDonationSchema);
