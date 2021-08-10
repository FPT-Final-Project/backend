import { Joi } from 'express-validation';

const askNewQuestion = {
  body: Joi.object({
    description: Joi.string().required(),
  }),
};

export default {
  askNewQuestion,
};
