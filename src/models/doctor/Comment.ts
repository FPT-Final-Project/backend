import mongoose, { Document, Schema } from 'mongoose';

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
<<<<<<< HEAD
    _id: { type: String, require: true },
    description: { type: String, requires: true },
    doctorId: { type: String, require: true, index: true },
    questionId: { type: String, require: true, index: true },
    createdAt: { type: Number },
    updatedAt: { type: Number },
    isDeletedAt: { type: Boolean },
=======
    description: { type: String, required: true },
    doctorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    questionId: { type: Schema.Types.ObjectId, ref: 'Question' , required: true  },
    createdAt: { type: Number },
    updatedAt: { type: Number },
    isDeletedAt: { type: Boolean, default: false  },
>>>>>>> 9fda1a9 ( fix yanr lint)
  },
  { timestamps: true },
);
export default mongoose.model<IComment>('Comment', CommentSchema);
