import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import scheduleService from '../services/schedule.service';
import catchAsync from '../utils/catchAsync';

const createSchedule = catchAsync(
  async (req: Request, res: Response, _: NextFunction) => {
    const { body: { fromTime, toTime } } = req;
    const schedule = await scheduleService.createSchedule(fromTime, toTime, (req as any).user);
    res.status(httpStatus.CREATED).json(schedule);
  },
);

const deleteSchedule = catchAsync(async (req: Request, res: Response, _: NextFunction) => {
  const { params: { id } } = req;
  const schedule = await scheduleService.deleteSchedule(id, (req as any).user);
  res.status(httpStatus.OK).json(schedule);
});
export default { createSchedule, deleteSchedule };
