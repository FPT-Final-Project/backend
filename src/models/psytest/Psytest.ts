import  mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';

export interface IPsychologyTest extends Document  {
    _id: string;
    name: string;
    type: string;
    description: string;
    createdAt: number;
    updatedAt: number;
    isDeleted: boolean;
  }

export const PsyTestSchema: Schema = new Schema({
    _id: { type: String, require: true },
    name: { type: String, require: true, unique: true, index: true },
    type: { type: String, require: true, index: true },
    description: { type: String, require: true },
    createdAt: { type: Number },
    updatedAt: { type: Number },
    isDeleted: { type: Boolean },
  });

export default mongoose.model<IPsychologyTest>('PsyTest', PsyTestSchema);
