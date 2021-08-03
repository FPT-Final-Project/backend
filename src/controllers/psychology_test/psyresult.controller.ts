import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { psytestService } from '../../services';
import catchAsync from '../../utils/catchAsync';

const createResult = catchAsync(
  async (req: Request, res: Response, _: NextFunction) => {
    const { id } = req.params;
    const { userId, score } = req.body;
    const result = await psytestService.createPsyTestResult(userId, id, +score);
    res.status(httpStatus.OK).json(result);
  },
);

const recommendDoctor = catchAsync(
  async (req: Request, res: Response, _: NextFunction) => {
    const result = req.body;
    const doctors = await psytestService.recommendDoctor(result);
    res.status(httpStatus.OK).json(doctors);
  },
);

export default {
  createResult, recommendDoctor,
};
