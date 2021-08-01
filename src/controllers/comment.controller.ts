import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { commentService } from '../services';

const addNewAnswerToQuestion = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { questionId } = req.params;
    const information = req.body;
    const comment = await commentService.addNewAnswerToQuestion(information, req, questionId);
    return res.status(httpStatus.CREATED).json({
      comment,
    });
  },
);

const getAllAnswersOfQuestion = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { questionId } = req.params;
    const comments = await commentService.getAllAnswersOfQuestion(questionId);
    res.status(httpStatus.OK).json({ comments });
  },
);

export default {
  addNewAnswerToQuestion, getAllAnswersOfQuestion,
};
