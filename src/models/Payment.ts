import mongoose, { Document, Schema } from 'mongoose';

/**
 * Payment Interface
 */
export interface IPayment extends Document {
  appointmentId: string;
  appointmentName: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  amount: string;
  payType: string;
  transId: string;
  createdAt: number;
  updatedAt: number;
}

export const PaymentSchema: Schema = new Schema({
  appointmentId: { type: String, require: true, index: true },
  appointmentName: { type: String, require: true },
  patientId: { type: String, require: true, index: true },
  patientName: { type: String, require: true },
  doctorId: { type: String, require: true, index: true },
  doctorName: { type: String, require: true },
  transId: { type: String, require: true, index: true },
  amount: { type: String, require: true },
  payType: { type: String, require: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
}, {
  versionKey: false,
  timestamps: true,
});

export default mongoose.model<IPayment>('Payment', PaymentSchema);
