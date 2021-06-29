import { Joi } from 'express-validation';

const login = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{8,30}/)
      .required(),
  }),
};
const signup = {
    body: Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(8).max(30).required(),
        firstName: Joi.string().min(2).max(30).required(),
        lastName: Joi.string().min(2).max(30).required(),
        role: Joi.string().required()
      }),
};

export default { login , signup };
