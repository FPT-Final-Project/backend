import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export  interface ISchedule extends Document {
  _id: string;
  doctorId: string;
  fromTime: number;
  toTime: number;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}
export const ScheduleSchema: Schema = new Schema(
  {
    _id: { type: String, require: true },
    doctorId: { type: String, require: true, index: true },
    fromTime: { type: Number, index: true },
    toTime: { type: Number, index: true },
    createdAt: { type: Number },
    updatedAt: { type: Number },
    isDeleted: { type: Boolean },
  },
  { timestamps: true }
);
export default mongoose.model<ISchedule>("Schedule", ScheduleSchema)