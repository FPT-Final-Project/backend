import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';

/**
 * Feedback Interface
 */
export interface IFeedback extends Document {
  appointmentId: string;
  rate: number;
  description: string;
  doctorId: string;
  patientId: string;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

export const FeedbackSchema: Schema = new Schema({
  appointmentId: { type: String, require: true },
  rate: { type: Number, require: true, enum: [1, 2, 3, 4, 5] },
  description: { type: String },
  doctorId: { type: String, require: true },
  patientId: { type: String, require: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean },
}, {
  timestamps: true,
});

export default mongoose.model<IFeedback>('Feedback', FeedbackSchema);
