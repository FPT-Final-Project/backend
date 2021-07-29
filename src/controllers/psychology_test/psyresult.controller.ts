import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { psytestService } from '../../services';
import catchAsync from '../../utils/catchAsync';

const createResult = catchAsync(
  async (req: Request, res: Response, _: NextFunction) => {
    const { id } = req.params;
    const { userId, score } = req.body;
    await psytestService.createPsyTestResult(userId, id, +score);

    res.status(httpStatus.OK).end();
  },
);

export default {
  createResult,
};
