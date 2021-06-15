import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
/**
 * Patient Interface
 */

/**
 * Feedback Interface
 */
export interface IFeedback extends Document {
  _id: string;
  description: string;
  doctorId: string;
  patientId: string;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

export const FeedbackSchema: Schema = new Schema({
  _id: { type: String, require: true },
  description: { type: String },
  doctorId: { type: String, require: true },
  patientId: { type: String, require: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean },
});
export default mongoose.model<IFeedback>("Feedback", FeedbackSchema)
