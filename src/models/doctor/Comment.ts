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
    description: { type: String, required: true },
    doctorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    questionId: { type: Schema.Types.ObjectId, ref: 'Question' , required: true  },
    createdAt: { type: Number },
    updatedAt: { type: Number },
    isDeletedAt: { type: Boolean, default: false  },
  },
  { timestamps: true }
);
export default mongoose.model<IComment>('Comment', CommentSchema);
