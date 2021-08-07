import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { userService } from '../services';
import { uploadSingle } from '../utils/cloudinary';

const updateProfile = catchAsync(
  async (req: Request, res: Response, _: NextFunction) => {
    await userService.updateProfile((req as any).user, req.body);
    res.status(httpStatus.OK).end();
  },
);
const changePassword = catchAsync(async (req: Request, res:Response, _:NextFunction) => {
  const { password, newPassword } = req.body;
  await userService.changePassword((req as any).user, password, newPassword);
  res.status(httpStatus.OK).end();
});
const uploadAvatar = catchAsync(async (req: Request, res:Response, _:NextFunction) => {
  const image = (req as any).file;
  const url = await uploadSingle(image);
  res.status(httpStatus.OK).send({ url, size: image.size });
});

const updateAvatar = catchAsync(async (req: Request, res:Response, _:NextFunction) => {
  const { avatar } = req.body;
  const { user } = (req as any);
  const users = await userService.updateAvatar(avatar, user);
  res.status(httpStatus.OK).json(users);
});
const userProfile = catchAsync(async (req: Request, res:Response, _:NextFunction) => {
  const { id } = req.params;
  const users = await userService.getUserProfile(id);
  res.status(httpStatus.OK).json(users);
});
export default {
  updateProfile, changePassword, uploadAvatar, updateAvatar, userProfile,
};
