import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';

const getDoctors = catchAsync(
  async (req: Request, res: Response, _: NextFunction) => {
  },
);

export default {
  getDoctors,
};
