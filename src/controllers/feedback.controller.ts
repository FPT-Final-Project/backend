/* eslint-disable max-len */
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { feedbackService } from '../services';

const createFeedback = catchAsync(async (req: Request, res: Response, _:NextFunction) => {
  const {
    appointmentId, rate, description, patientId, doctorId,
  } = req.body;
  const feedback = await feedbackService.createFeedback((req as any).user, appointmentId, rate, description, patientId, doctorId);
  res.status(httpStatus.CREATED).json(feedback);
});

export default {
  createFeedback,
};
