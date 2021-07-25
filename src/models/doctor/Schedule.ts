import mongoose, { Document, Schema } from 'mongoose';

export interface ISchedule extends Document {
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
    doctorId: { type: String, required: true, index: true },
    fromTime: { type: Number, index: true, required: true },
    toTime: { type: Number, index: true, required: true },
    createdAt: { type: Number },
    updatedAt: { type: Number },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model<ISchedule>('Schedule', ScheduleSchema);
