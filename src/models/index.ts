<<<<<<< HEAD
import Comment from './doctor/Comment';
import Schedule from './doctor/Schedule';
import User from './User';

export{
  Comment,
  User,
  Schedule
};
=======
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
>>>>>>> 5378b3b64cf3cdcba750edae6b81406478b337aa
