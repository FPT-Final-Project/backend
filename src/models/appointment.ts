import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
/**
 * Appointment Interface
 */
export interface IAppointment extends Document {
  dateOfAppointment: number;
  patentId: string;
  doctorId: string;
  doctorName: string;
  status: string;
  isCanceled: Boolean;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

export const AppointmentSchema: Schema = new Schema({
  _id: { type: String, require: true },
  dateOfAppointment: { type: Number, require: true, index: true },
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
});

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);
