import * as mongoose from 'mongoose';

/**
 * Patient Interface
 */
export interface Patient {
  _id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: string;
  job: string;
  gender: string;
  phone: string;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

/**
 * Question Interface
 */
export interface Question {
  _id: string;
  title: string;
  description: string;
  patientId: string;
  createdAt: number;
  updatedAt: number;
  isDeletedAt: boolean;
}

/**
 * Feedback Interface
 */
export interface Feedback {
  _id: string;
  description: string;
  doctorId: string;
  patientId: string;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

export const PatientSchema = new mongoose.Schema({
  _id: { type: String, require: true },
  name: { type: String, require: true, index: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, index: true },
  password: { type: String, require: true },
  age: { type: String },
  job: { type: String },
  gender: { type: String },
  phone: { type: String },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean },
});

export const QuestionSchema = new mongoose.Schema({
  _id: { type: String, require: true },
  title: { type: String, require: true },
  description: { type: String, require: true },
  patientId: { type: String, require: true, index: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeletedAt: { type: Boolean },
});

export const FeedbackSchema = new mongoose.Schema({
  _id: { type: String, require: true },
  description: { type: String },
  doctorId: { type: String, require: true },
  patientId: { type: String, require: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean },
});
