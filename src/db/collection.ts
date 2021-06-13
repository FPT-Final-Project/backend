import * as mongoose from 'mongoose';
import schemas from '../models/index';

const models = {
  'appointments': schemas.AppointmentSchema,
  'doctors': schemas.DoctorSchema,
  'schedules': schemas.ScheduleSchema,
  'comments': schemas.CommentSchema,
  'patients': schemas.PatientSchema,
  'results': schemas.ResultSchema,
  'feedbacks': schemas.FeedbackSchema,
  'questions': schemas.QuestionSchema,
  'psychology_tests': schemas.PsyTestSchema,
  'psychology_questions': schemas.PsyQuestionSchema,
  'psychology_answers': schemas.PsyAnswerSchema,
  'psychology_results': schemas.PsyResultSchema,
};

export const createCollections = (mongooseInstance: mongoose.Connection) => {
  const collections = {} as any;

  Object.keys(models).forEach((collection) => {
    collections[collection] = mongooseInstance.model(collection, (models as any)[collection]);
  });

  return collections;
};
