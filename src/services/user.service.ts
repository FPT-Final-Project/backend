import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import _ from 'lodash';
import { IUser } from '../models/User';
import APIError from '../utils/ApiError';
import { User } from '../models';

const saltRounds = 10;

const updateProfile = async (user: IUser, body) => {
  const {
    name, phone, address, major, gender, job,
  } = body.values;
  const checkUser = await User.findOne({ _id: user.id });
  if (!checkUser) {
    throw new APIError({
      message: 'User not found',
      status: httpStatus.NOT_FOUND,
    });
  }

  await User.findOneAndUpdate({ _id: user.id }, {
    name, phone, address, major, gender, job,
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

const getDoctor = async (id: string) => {
  const doctor = await User.findById(id);
  return _.pick(doctor, ['_id', 'gender', 'role', 'name', 'avatar', 'email', 'major']);
};

const getListOfDoctors = async () => {
  const listOfDoctors = await User.find({ role: 'doctor' });
  return _.map(listOfDoctors, _.partialRight(_.pick, ['_id', 'gender', 'name', 'email', 'avatar', 'major']));
};
const getUserProfile = async (id) => {
  const userProfile = await User.findById(({ _id: id }));
  return _.pick(userProfile, ['name', 'avatar']);
};
const getMe = async (user) => {
  const userMe = await User.findById({ _id: user.id });
  return _.pick(userMe, ['gender', 'name', 'avatar', 'email', 'major', 'phone', 'address', 'job']);
};
export default {
  updateProfile, changePassword, getListOfDoctors, updateAvatar, getUserProfile, getDoctor, getMe,
};
