import mongoose, { Document, Schema } from 'mongoose';

export interface IPsychologyAnswer extends Document {
  _id: string;
  psyQuestionId: string;
  answerText: string;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

export const PsychologyAnswerSchema: Schema = new Schema({
  _id: { type: String, require: true },
  psyQuestionId: { type: String, require: true, index: true },
  answerText: { type: String, require: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean },
});

export default mongoose.model<IPsychologyAnswer>('PsyAnswer', PsychologyAnswerSchema);
