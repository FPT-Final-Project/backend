import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { psytestService as psyTestService } from '../../services';
import catchAsync from '../../utils/catchAsync';

const createPsyTest = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { name, type, description } = req.body;
    const psyTest = await psyTestService.createPsyTest(name, type, description);
    res.status(httpStatus.CREATED).json(psyTest);
  },
);
const getAllPsyTests = catchAsync(
  async (_req: Request, res: Response, _next: NextFunction) => {
    const PsyTestQuestions = await psyTestService.getAllPsyTest();
    res.status(httpStatus.OK).json(PsyTestQuestions);
  },
);

export default { getAllPsyTests, createPsyTest };
