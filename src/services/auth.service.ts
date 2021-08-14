import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';
import { User } from '../models';
import APIError from '../utils/ApiError';
import { verifyToken } from '../utils/jwt';

const saltRounds = 10;

const register = async (id: string, name: string, email:string, password: string, role: string) => {
  const user = await User.findOne({ email }).lean();
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

  return newUser;
};

const login = async (email: string, password: string) => {
  const user = await User.findOne({ email }).lean();
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

  return user;
};

const loginWithToken = async (token: string) => {
  const { id } = verifyToken(token);
  const user = await User.findById(id).lean();
  return user;
};

export default {
  register,
  login,
  loginWithToken,
};
