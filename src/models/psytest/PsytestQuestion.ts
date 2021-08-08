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
  psyTestId: { type: String, required: true, index: true },
  questionText: { type: String, required: true },
  alternatives: [
    {
      text: {
        type: String,
        required: true,
      },
      mark: {
        type: Number,
        required: true,
      },
    },
  ],
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean },
}, { timestamps: true });

export default mongoose.model<IPsychologyQuestion>(
  'PsyQuestion',
  PsychologyQuestionSchema,
);
