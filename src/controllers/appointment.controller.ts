import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { appointmentService } from '../services';

const getAppointment = catchAsync(async (req: Request, res: Response, _: NextFunction) => {
  const { id } = req.params;
  const appointment = await appointmentService.getAppointment((req as any).user, id);
  res.status(httpStatus.OK).json(appointment);
});

const getAppointments = catchAsync(async (req: Request, res: Response, _:NextFunction) => {
  const appointments = await appointmentService.getAppointments((req as any).user);
  res.status(httpStatus.OK).json(appointments);
});

const getTotalAppointment = catchAsync(async (req: Request, res: Response, _:NextFunction) => {
  const totalAppointments = await appointmentService.getTotalAppointment();
  res.status(httpStatus.OK).json(totalAppointments);
});

const makeAnAppointment = catchAsync(async (req: Request, res: Response, _:NextFunction) => {
  const {
    patientId, patientName, name, startOfAppointment, endOfAppointment, doctorId, doctorName,
  } = req.body;
  const appointment = await appointmentService.makeAnAppointment(
    patientId,
    patientName,
    name,
    startOfAppointment,
    endOfAppointment,
    doctorId,
    doctorName,
  );
  res.status(httpStatus.CREATED).json(appointment);
});

const cancelAnAppointment = catchAsync(async (req: Request, res: Response, _:NextFunction) => {
  const { params: { id } } = req;
  const appointments = await appointmentService.cancelAnAppointment((req as any).user, id);
  res.status(httpStatus.OK).json(appointments);
});

const checkAppointment = catchAsync(
  async (req: Request, res: Response, _:NextFunction) => {
    const { patientId, doctorId, startOfAppointment } = req.body;
    const isExisted = await appointmentService.checkAppointment(patientId, doctorId, startOfAppointment);
    res.status(httpStatus.OK).json({ isExisted });
  },
);

export default {
  getAppointment,
  getAppointments,
  makeAnAppointment,
  cancelAnAppointment,
  checkAppointment,
  getTotalAppointment,
};
