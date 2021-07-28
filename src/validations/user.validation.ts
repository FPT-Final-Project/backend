import { Joi } from 'express-validation';

const updateProfile = {
  body: Joi.object({
    lastName: Joi.string().min(2).required(),
    firstName: Joi.string().min(2).required(),
    address: Joi.string().required(),
    phone: Joi.string().length(10).pattern(/(84|0[3|5|7|8|9])+([0-9]{8})\b/).required(),
  }),
};
const changePassword = {
  body: Joi.object({
    password: Joi.string().min(8).max(30).required(),
    newPassword: Joi.string().min(8).max(30).required(),
  }),
};

export default {
  updateProfile, changePassword,
};
