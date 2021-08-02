import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { userService } from '../services';

const getDoctor = catchAsync(
  async (req: Request, res: Response, _:NextFunction) => {
    const { id } = req.params;
    const doctor = await userService.getDoctor(id);
    res.status(httpStatus.OK).json(doctor);
  },
);

const getListOfDoctors = catchAsync(
  async (req: Request, res: Response, _:NextFunction) => {
    const listOfDoctors = await userService.getListOfDoctors();
    res.status(httpStatus.OK).json(listOfDoctors);
  },
);

export default {
  getDoctor,
  getListOfDoctors,
};
