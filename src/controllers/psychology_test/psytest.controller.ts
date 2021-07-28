import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { psytestService } from '../../services';
import catchAsync from '../../utils/catchAsync';

const createPsytest = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { name, type, description } = req.body;
    const psytest = await psytestService.createPsytest(name, type, description);
    res.status(httpStatus.CREATED).json(psytest);
  },
);
const getAllPsytests = catchAsync(
  async (_req: Request, res: Response, _next: NextFunction) => {
    const PsytestQuestions = await psytestService.getAllPsytest();
    res.status(httpStatus.OK).json(PsytestQuestions);
  },
);

export default { getAllPsytests, createPsytest };
