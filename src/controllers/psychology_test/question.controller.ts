import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { psytestService } from '../../services';
import catchAsync from '../../utils/catchAsync';

const getPsytestQuestionsById = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { params: { id } } = req;
    const PsytestQuestions = await psytestService.getPsytestQuestionsById(id);
    res.status(httpStatus.OK).json(PsytestQuestions);
  },
);
const createPsyQuestions = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { params: { id } } = req;
    const { questionText, alternatives } = req.body;
    const PsytestQuestion = await psytestService.createPsyQuestions(id, questionText, alternatives);
    res.status(httpStatus.CREATED).json(PsytestQuestion);
  },
);
export default { getPsytestQuestionsById, createPsyQuestions };
