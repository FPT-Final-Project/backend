import * as mongoose from 'mongoose';

/**
 * Doctor Interface
 */
export interface Doctor {
  _id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
  phone: string;
  major: string;
  consultingFee: number;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

/**
 * Schedule Interface
 */
export interface Schedule {
  _id: string;
  doctorId: string;
  fromTime: number;
  toTime: number;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

/**
 * Comment Interface
 */
export interface Comment {
  _id: string;
  description: string;
  doctorId: string;
  questionId: string;
  createdAt: number;
  updatedAt: number;
  isDeletedAt: boolean;
}

export const DoctorSchema = new mongoose.Schema({
  _id: { type: String, require: true },
  name: { type: String, require: true, index: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true },
  gender: { type: String },
  age: { type: Number },
  phone: { type: String, require: true, index: true },
  major: { type: String, require: true, index: true },
  consultingFee: { type: Number },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean },
});

export const ScheduleSchema = new mongoose.Schema({
  _id: { type: String, require: true },
  doctorId: { type: String, require: true, index: true },
  fromTime: { type: Number, index: true },
  toTime: { type: Number, index: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean },
});

export const CommentSchema = new mongoose.Schema({
  _id: { type: String, require: true },
  description: { type: String, requires: true },
  doctorId: { type: String, require: true, index: true },
  questionId: { type: String, require: true, index: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeletedAt: { type: Boolean },
});
