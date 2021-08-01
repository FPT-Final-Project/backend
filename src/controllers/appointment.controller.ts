import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import { appointmentService } from '../services';
import { IRequest } from '../configs/request';
import catchAsync from '../utils/catchAsync';

const getAppointment = catchAsync(
  async (req: IRequest, res: Response, _: NextFunction) => {
    const { id } = req.params;
    const { _id: userId, role } = req.user;

    const appointment = await appointmentService.getAppointment(userId, role, id);
    res.status(httpStatus.OK).json(appointment);
  },
);

const getAppointments = catchAsync(
  async (req: IRequest, res: Response, _: NextFunction) => {
    const { name, status, isToday } = req.query as any;
    const { _id: userId, role } = req.user;

    const appointments = await appointmentService.getAppointments(userId, role, status, name, isToday);
    res.status(httpStatus.OK).json(appointments);
  },
);

export default {
  getAppointment,
  getAppointments,
};
