import mongoose, { Document, Schema } from 'mongoose';

export interface IPsychologyTest extends Document {
    _id: string;
    name: string;
    type: string ;
    description: string;
    createdAt: number;
    updatedAt: number;
    isDeleted: boolean;
  }

export const PsyTestSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, required: true, index: true },
  description: { type: String, required: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean },
}, { timestamps: true });

export default mongoose.model<IPsychologyTest>('PsyTest', PsyTestSchema);
