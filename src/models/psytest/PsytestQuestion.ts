import mongoose, { Document, Schema } from 'mongoose';

export interface IPsychologyQuestion extends Document {
  _id: string;
  psyTestId: string;
  questionText: string;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

export const PsychologyQuestionSchema: Schema = new Schema({
  _id: { type: String, require: true },
  psyTestId: { type: String, require: true, index: true },
  questionText: { type: String, require: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean },
});

export default mongoose.model<IPsychologyQuestion>(
  'PsyQuestion',
  PsychologyQuestionSchema,
);
