import catchAsync from "../utils/catchAsync";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { commentService } from "../services";

const addNewAnswerToQuestion = catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
    const params = req.params
    const {questionId} = params;    
    const information = req.body;
    const comment = await commentService.addNewAnswerToQuestion(information, req, questionId)
    return res.status(httpStatus.CREATED).json({
        comment
    });
});
export default { 
    addNewAnswerToQuestion
}
