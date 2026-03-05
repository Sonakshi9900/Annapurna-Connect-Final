import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
    role: "donor" | "ngo" | "admin";
    phone: string;
    address?: string;
    createdAt: Date;
}

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["donor", "ngo", "admin"], required: true },
        phone: { type: String, required: true },
        address: { type: String },
    },
    { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
