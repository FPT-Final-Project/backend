import catchAsync from '../utils/catchAsync';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { questionService } from '../services';
const askNewQuestion = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const information = req.body;
    const question = await questionService.askNewQuestion(information, req);
    return res.status(httpStatus.CREATED).json({
        question
    });
  }
);
<<<<<<< HEAD
const getAllQuestions = catchAsync(async(_req: Request, res: Response, _next: NextFunction) => {
    const allQuestions = await questionService.getAllQuestions();
    return res.status(httpStatus.OK).json({
      allQuestions
    });
});
export default{
    askNewQuestion, getAllQuestions
};
=======
const getAllQuestions = catchAsync(async(_req: Request, res: Response, _next: NextFunction) => { 
    const allQuestions = await questionService.getAllQuestions()
    return res.status(httpStatus.OK).json({
      allQuestions
    })  
})
export default{ 
    askNewQuestion, getAllQuestions
}
>>>>>>> 1835606 ( implement comment api)
