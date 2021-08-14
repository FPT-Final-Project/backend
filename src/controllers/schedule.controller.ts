import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import { IRequest } from '../configs/request';
import scheduleService from '../services/schedule.service';
import catchAsync from '../utils/catchAsync';

const createSchedule = catchAsync(
  async (req: IRequest, res: Response, _: NextFunction) => {
    const { fromTime, toTime } = req.body;
    const schedule = await scheduleService.createSchedule(fromTime, toTime, (req as any).user);
    res.status(httpStatus.CREATED).json(schedule);
  },
);

const deleteSchedule = catchAsync(
  async (req: IRequest, res: Response, _: NextFunction) => {
    const { id } = req.params;
    const schedule = await scheduleService.deleteSchedule(id, req.user);
    res.status(httpStatus.OK).json(schedule);
  },
);

const getSchedulesToday = catchAsync(
  async (req: IRequest, res: Response, _: NextFunction) => {
    const { id } = req.params;
    const schedule = await scheduleService.getSchedulesToday(id);
    res.status(httpStatus.OK).json(schedule);
  },
);

const updateSchedule = catchAsync(
  async (req: IRequest, res: Response, _: NextFunction) => {
    const { id } = req.params;
    const schedule = await scheduleService.updateSchedule(id);
    res.status(httpStatus.OK).json(schedule);
  },
);

export default {
  createSchedule, deleteSchedule, getSchedulesToday, updateSchedule,
};
