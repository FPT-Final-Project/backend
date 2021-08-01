import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import _ from 'lodash';
import { IUser } from '../models/User';
import APIError from '../utils/ApiError';
import { User } from '../models';

const saltRounds = 10;

const updateProfile = async (
  user: IUser,
  body: { firstName: string, lastName: string, phone: string, address: string },
) => {
  const {
    firstName, lastName, phone, address,
  } = body;
  const checkUser = await User.findOne({ _id: user.id });
  if (!checkUser) {
    throw new APIError({
      message: 'User not found',
      status: httpStatus.NOT_FOUND,
    });
  }

  await User.findOneAndUpdate({ _id: user.id }, {
    firstName, lastName, phone, address,
  });
};

const changePassword = async (users, password, newPassword) => {
  const user = await User.findOne({ _id: users.id });
  if (!user) {
    throw new APIError({
      message: 'User not found',
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
  const passwordHashed = await bcrypt.hash(newPassword, saltRounds);
  await User.findOneAndUpdate({ _id: users.id }, { password: passwordHashed });
};

const updateAvatar = async (avatar, user) => {
  return User.findOneAndUpdate({ _id: user.id }, { avatar });
};

const getListOfDoctors = async () => {
  const listOfDoctors = await User.find({ role: 'doctor' });
  return _.map(listOfDoctors, _.partialRight(_.pick, ['gender', 'firstName', 'lastName', 'email']));
};

export default {
  updateProfile,
  changePassword,
  getListOfDoctors,
  updateAvatar,
};
