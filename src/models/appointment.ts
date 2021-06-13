import * as mongoose from 'mongoose';

/**
 * Appointment Interface
 */
export interface Appointment {
  _id: string;
  dateOfAppointment: number;
  patentId: string;
  doctorId: string;
  status: string;
  isCanceled: Boolean;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

export const AppointmentSchema = new mongoose.Schema({
  _id: { type: String, require: true },
  dateOfAppointment: { type: Number, require: true, index: true },
  patentId: { type: String, require: true, index: true },
  doctorId: { type: String, require: true, index: true },
  status: { type: String, require: true, index: true },
  isCanceled: { type: Boolean, require: true, index: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean }
});
