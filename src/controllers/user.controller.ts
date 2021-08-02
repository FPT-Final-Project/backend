import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { userService } from '../services';
import { uploadSingle } from '../utils/cloudinary';
import { IRequest } from '../configs/request';

const updateProfile = catchAsync(
  async (req: IRequest, res: Response, _: NextFunction) => {
    await userService.updateProfile(req.user, req.body);
    res.status(httpStatus.OK).end();
  },
);

const changePassword = catchAsync(
  async (req: IRequest, res:Response, _:NextFunction) => {
    const { password, newPassword } = req.body;
    await userService.changePassword(req.user, password, newPassword);
    res.status(httpStatus.OK).end();
  },
);

const uploadAvatar = catchAsync(
  async (req: IRequest, res:Response, _:NextFunction) => {
    const image = req.file;
    const url = await uploadSingle(image);
    res.status(httpStatus.OK).send({ url, size: image && image.size });
  },
);

const updateAvatar = catchAsync(
  async (req: IRequest, res:Response, _:NextFunction) => {
    const { avatar } = req.body;
    const { user } = req;
    const users = await userService.updateAvatar(avatar, user);
    res.status(httpStatus.OK).json(users);
  },
);

export default {
  updateProfile, changePassword, uploadAvatar, updateAvatar,
};
