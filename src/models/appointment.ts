import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
/**
 * Appointment Interface
 */
export interface IAppointment extends Document {
  name: string;
  startOfAppointment: number;
  endOfAppointment: number;
  patentId: string;
  doctorId: string;
  doctorName: string;
  status: string;
  roomLink: string;
  isCanceled: boolean;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

export const AppointmentSchema: Schema = new Schema({
  name: { type: String, require: true },
  startOfAppointment: { type: Number, require: true, index: true },
  endOfAppointment: { type: Number, require: true, index: true },
  patientId: { type: String, require: true, index: true },
  patientName: { type: String, require: true },
  doctorId: { type: String, require: true, index: true },
  doctorName: { type: String, require: true },
  status: { type: String, require: true, index: true },
  roomLink: { type: String, require: true, index: true },
  isCanceled: { type: Boolean, require: true, index: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean },
}, {
  versionKey: false,
  timestamps: true,
});

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);
