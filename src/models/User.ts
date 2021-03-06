import mongoose, { Document, Schema } from 'mongoose';
import { genders } from '../configs/genders';

export interface IUser extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  dateOfBirth: string;
  age: string;
  job: string;
  gender: string;
  avatar: string;
  phone: string;
  role: string;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
    },
    avatar: {
      type: String,
    },
    gender: {
      type: String,
      enum: genders,
      default: 0,
    },
    phone: {
      type: String,
      minlength: 10,
    },
    dateOfBirth: {
      type: Date,
    },
    address: {
      type: String,
    },
    job: {
      type: String,
    },
    role: {
      type: String,
      enum: ['patient', 'doctor', 'admin'],
      default: 'patient',
    },
    bookingTime: {
      type: Array,
    },
    consultingFee: {
      type: Number,
    },
    major: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model<IUser>('User', UserSchema);
