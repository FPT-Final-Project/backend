/* eslint-disable max-len */
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { appointmentService, scheduleService } from '../services';

const getAppointment = catchAsync(async (req: Request, res: Response, _: NextFunction) => {
  const { id } = req.params;
  const appointment = await appointmentService.getAppointment((req as any).user, id);
  res.status(httpStatus.OK).json(appointment);
});

const getAppointments = catchAsync(async (req: Request, res: Response, _:NextFunction) => {
  const appointments = await appointmentService.getAppointments((req as any).user);
  res.status(httpStatus.OK).json(appointments);
});

const makeAnAppointment = catchAsync(async (req: Request, res: Response, _:NextFunction) => {
  const {
    name, startOfAppointment, endOfAppointment, doctorId, doctorName,
  } = req.body;
  const appointment = await appointmentService.makeAnAppointment((req as any).user, name, startOfAppointment, endOfAppointment, doctorId, doctorName);
  res.status(httpStatus.CREATED).json(appointment);
});

const cancelAnAppointment = catchAsync(async (req: Request, res: Response, _:NextFunction) => {
  const { params: { id } } = req;
  const appointments = await appointmentService.cancelAnAppointment((req as any).user, id);
  res.status(httpStatus.OK).json(appointments);
});

export default {
  getAppointment, getAppointments, makeAnAppointment, cancelAnAppointment,
};
