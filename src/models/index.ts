import { AppointmentSchema } from './appointment';
import { DoctorSchema, CommentSchema, ScheduleSchema } from './doctor';
import { PatientSchema, QuestionSchema, FeedbackSchema } from './patient';
import { ResultSchema } from './result';
import { PsyAnswerSchema, PsyQuestionSchema, PsyTestSchema, PsyResultSchema } from './psychology_test';

export default {
  AppointmentSchema,
  DoctorSchema,
  CommentSchema,
  ScheduleSchema,
  ResultSchema,
  PatientSchema,
  QuestionSchema,
  FeedbackSchema,
  /**
   * Psychology Test Schemas
   */
  PsyTestSchema,
  PsyQuestionSchema,
  PsyAnswerSchema,
  PsyResultSchema
};
