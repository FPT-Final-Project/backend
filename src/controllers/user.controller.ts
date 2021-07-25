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

export default { updateProfile, changePassword, uploadAvatar };
