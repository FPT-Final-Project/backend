import { Joi } from 'express-validation';

const askNewQuestion = {
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

export default {
  askNewQuestion,
};
