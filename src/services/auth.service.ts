import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import _ from 'lodash';
import { ObjectId } from 'mongodb';
import { User } from '../models';
import APIError from '../utils/ApiError';

const saltRounds = 10;

const register = async (id: string, name: string, email:string, password: string, role: string) => {
  const user = await User.findOne({ email });
  if (user) {
    throw new APIError({
      message: 'Account already exists',
      status: httpStatus.BAD_REQUEST,
    });
  }

  const passwordHashed = await bcrypt.hash(password, saltRounds);
  const data = {
    name,
    email,
    role,
    password: passwordHashed,
    ...(id && { _id: new ObjectId(id) }),
  };

  await User.create(data);
  const newUser = await User.findOne({ email });

  return _.pick(newUser, ['_id', 'gender', 'role', 'name', 'avatar', 'email']);
};

const login = async (email: string, password: string) => {
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

  return _.pick(user, ['_id', 'gender', 'role', 'name', 'avatar', 'email', 'major', 'address', 'phone']);
};

export default {
  register, login,
};
