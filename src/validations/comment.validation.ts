/* eslint-disable linebreak-style */
import { Joi } from 'express-validation';

const addNewAnswerToQuestion = {
  body: Joi.object({
    description: Joi.string().required(),
  }),
};

export default {
  addNewAnswerToQuestion,
};
