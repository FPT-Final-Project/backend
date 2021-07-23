import mongoose, { Document, Schema } from 'mongoose';

/**
 * Consulting Result Interface
 */
export interface IResult extends Document {
  _id: string;
  doctorId: string;
  patientId: string;
  description: string;
  medicines: [
    {
      name: string,
      description: string,
      quantity: number,
    }
  ];
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

export const ResultSchema: Schema = new Schema({
  _id: { type: String, require: true },
  doctorId: { type: String, require: true },
  patientId: { type: String, require: true },
  description: { type: String, require: true },
  medicines: [
    {
      name: { type: String, require: true },
      description: { type: String, require: true },
      quantity: { type: Number, require: true },
    },
  ],
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean },
});

export default mongoose.model<IResult>('Result', ResultSchema);
