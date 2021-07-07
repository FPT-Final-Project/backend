import mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
export interface IQuestion extends Document {
  _id: string;
  title: string;
  description: string;
  patientId: string;
  createdAt: number;
  updatedAt: number;
  isDeletedAt: boolean;
}

export const QuestionSchema: Schema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    patientId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    isDeletedAt: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IQuestion>('Question', QuestionSchema);
