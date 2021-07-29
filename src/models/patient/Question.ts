import mongoose, { Document, Schema } from 'mongoose';

export interface IQuestion extends Document {
  title: string;
  description: string;
  patientId: string;
  createdAt: number;
  updatedAt: number;
  isDeletedAt: boolean;
}

export const QuestionSchema: Schema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  patientId: {
    type: Schema.Types.ObjectId, ref: 'User', require: true, index: true,
  },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeletedAt: { type: Boolean },
}, {
  timestamps: true,
});

export default mongoose.model<IQuestion>('Question', QuestionSchema);
