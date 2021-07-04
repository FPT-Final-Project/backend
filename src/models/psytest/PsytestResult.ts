import mongoose, { Document, Schema } from 'mongoose';

export interface IPsychologyResult extends Document {
    _id: string;
    psyTestId: string;
    patientId: string;
    result: number;
    createdAt: number;
  }

export const PsyResultSchema: Schema = new Schema({
  _id: { type: String, require: true },
  psyTestId: { type: String, require: true, index: true },
  patientId: { type: String, require: true, index: true },
  result: { type: Number, require: true, index: true },
  createdAt: { type: Number },
});

export default mongoose.model<IPsychologyResult>('PsyResult', PsyResultSchema);
