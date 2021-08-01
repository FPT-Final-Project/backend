import { Joi } from 'express-validation';

const login = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};

const register = {
  body: Joi.object({
    id: Joi.string(),
    email: Joi.string().required().email(),
    password: Joi.string().min(8).max(30).required(),
    name: Joi.string().min(2).max(30).required(),
    role: Joi.string().required(),
  }),
};

export default { login, register };
