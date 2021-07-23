import httpStatus from 'http-status';
import { IUser } from '../models/User';
import APIError from '../utils/ApiError';
import { User } from '../models';

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

export default {
  updateProfile,
};
