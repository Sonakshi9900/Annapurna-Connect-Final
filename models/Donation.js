import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema({
  donorName: String,
  foodType: String,
  quantity: String,
  expiryTime: String,
  location: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Donation ||
mongoose.model("Donation", DonationSchema);