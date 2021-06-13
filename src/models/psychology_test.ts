import * as mongoose from 'mongoose';

/**
 * Psychology Test Interface
 */
export interface PsychologyTest {
  _id: string;
  name: string;
  type: string;
  description: string;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

/**
 * Psychology Question Interface
 */
export interface PsychologyQuestion {
  _id: string;
  psyTestId: string;
  questionText: string;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

/**
 * Psychology Answer Interface
 */
export interface PsychologyAnswer {
  _id: string;
  psyQuestionId: string;
  answerText: string;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}

/**
 * Psychology Result Interface
 */
export interface PsychologyResult {
  _id: string;
  psyTestId: string;
  patientId: string;
  result: number;
  createdAt: number;
}

export const PsyTestSchema = new mongoose.Schema({
  _id: { type: String, require: true },
  name: { type: String, require: true, unique: true, index: true },
  type: { type: String, require: true, index: true },
  description: { type: String, require: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean },
});

export const PsyQuestionSchema = new mongoose.Schema({
  _id: { type: String, require: true },
  psyTestId: { type: String, require: true, index: true },
  questionText: { type: String, require: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean },
});

export const PsyAnswerSchema = new mongoose.Schema({
  _id: { type: String, require: true },
  psyQuestionId: { type: String, require: true, index: true },
  answerText: { type: String, require: true },
  createdAt: { type: Number },
  updatedAt: { type: Number },
  isDeleted: { type: Boolean },
});

export const PsyResultSchema = new mongoose.Schema({
  _id: { type: String, require: true },
  psyTestId: { type: String, require: true, index: true },
  patientId: { type: String, require: true, index: true },
  result: { type: Number, require: true, index: true },
  createdAt: { type: Number },
});
