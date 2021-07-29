import { NextFunction, Request, Response } from 'express';
import { paymentService } from '../services';
import catchAsync from '../utils/catchAsync';

const requestFromMomo = catchAsync(
  async (req: Request, res: Response, _: NextFunction) => {
    const {
      amount, payType, transId, extraData,
    } = req.body;
    const [
      appointmentId,
      appointmentName,
      patientId,
      patientName,
      doctorId,
      doctorName,
    ] = extraData.split(',');

    await paymentService.createPayment(
      appointmentId,
      appointmentName,
      patientId,
      patientName,
      doctorId,
      doctorName,
      amount,
      payType,
      transId,
    );

    res.end();
  },
);

export default {
  requestFromMomo,
};
