/* eslint-disable max-len */
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { appointmentService } from '../services';

const mongoose = require('mongoose');

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
  const appointment = await appointmentService.cancelAnAppointment((req as any).user, id);
  res.status(httpStatus.OK).json(appointment);
});
export default {
  getAppointments, makeAnAppointment, cancelAnAppointment,
};
