import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import _ from 'lodash';
import { User } from '../models';
import APIError from '../utils/ApiError';

const saltRounds = 10;

const signup = async (firstName, lastName, email, password, role) => {
  const user = await User.findOne({ email });
  if (user) {
    throw new APIError({
      message: 'Account already exists',
      status: httpStatus.BAD_REQUEST,
    });
  }

  const passwordHashed = await bcrypt.hash(password, saltRounds);
  await User.create({
    firstName,
    lastName,
    email,
    role,
    password: passwordHashed,
  });

  return { email, firstName, lastName };
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new APIError({
      message: 'Account not found',
      status: httpStatus.NOT_FOUND,
    });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new APIError({
      message: 'Invalid password',
      status: httpStatus.BAD_REQUEST,
    });
  }

  return _.pick(user, ['gender', 'isOnline', 'role', '_id', 'firstName', 'lastName', 'avatar']);
};

export default {
  signup, login,
};
