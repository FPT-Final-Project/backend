import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { userService } from '../services';
import { IRequest } from '../configs/request';

const getDoctors = catchAsync(
  async (req: IRequest, res: Response, _: NextFunction) => {
  },
);
const getListOfDoctors = catchAsync(async (req: Request, res: Response, _:NextFunction) => {
  const listOfDoctors = await userService.getListOfDoctors();
  res.status(httpStatus.OK).json(listOfDoctors);
});
export default {
  getDoctors, getListOfDoctors,
};
