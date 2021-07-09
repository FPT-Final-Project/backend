import httpStatus from 'http-status';
import APIError from '../utils/ApiError';
import { User } from '../models';

const updateProfile = async (req, firstName, lastName, phone, address) => {
  const { user } = req;
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
