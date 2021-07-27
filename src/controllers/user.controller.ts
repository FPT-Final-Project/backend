import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { userService } from '../services';

const updateProfile = catchAsync(
  async (req: Request, res: Response, _: NextFunction) => {
    await userService.updateProfile((req as any).user, req.body);
    res.status(httpStatus.OK).end();
  },
);

export default { updateProfile };
