import mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';

export interface IComment extends Document {
  _id: string;
  description: string;
  doctorId: string;
  questionId: string;
  createdAt: number;
  updatedAt: number;
  isDeletedAt: boolean;
}
export const CommentSchema: Schema = new Schema(
  {
    _id: { type: String, require: true },
    description: { type: String, requires: true },
    doctorId: { type: String, require: true, index: true },
    questionId: { type: String, require: true, index: true },
    createdAt: { type: Number },
    updatedAt: { type: Number },
    isDeletedAt: { type: Boolean },
  },
  { timestamps: true }
);
export default mongoose.model<IComment>('Comment', CommentSchema);
