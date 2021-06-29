import * as mongoose from 'mongoose';
<<<<<<< HEAD
import { Document, Schema } from 'mongoose';
/**
 * Appointment Interface
 */
export interface IAppointment extends Document {
=======

/**
 * Appointment Interface
 */
export interface Appointment {
>>>>>>> 5378b3b64cf3cdcba750edae6b81406478b337aa
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

<<<<<<< HEAD
export const AppointmentSchema: Schema = new Schema({
=======
export const AppointmentSchema = new mongoose.Schema({
>>>>>>> 5378b3b64cf3cdcba750edae6b81406478b337aa
  _id: { type: String, require: true },
  dateOfAppointment: { type: Number, require: true, index: true },
  patentId: { type: String, require: true, index: true },
  doctorId: { type: String, require: true, index: true },
  status: { type: String, require: true, index: true },
  isCanceled: { type: Boolean, require: true, index: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
<<<<<<< HEAD
  isDeleted: { type: Boolean },
});
export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);
=======
  isDeleted: { type: Boolean }
});
>>>>>>> 5378b3b64cf3cdcba750edae6b81406478b337aa
