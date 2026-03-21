import mongoose from 'mongoose';

const PartnerSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  logoUrl: { type: String, required: true },
  treesSponsored: { type: Number, default: 0 },
  description: { type: String },
}, { timestamps: true });

export default mongoose.models.Partner || mongoose.model('Partner', PartnerSchema);
