import APIError from '../utils/ApiError';
import { Comment, Question } from '../models';
import httpStatus from 'http-status';

const addNewAnswerToQuestion = async (information, req, questionId) => {
    const question  = await Question.findById(questionId);
    if (!question) {
        throw new APIError({
            message: 'Question not exist',
            status:  httpStatus.NOT_FOUND
        });
    }
    const comment = await Comment.create({
        ...information,
        doctorId: req.user._id,
        questionId
    });
    return comment;
};
export default {
    addNewAnswerToQuestion
};
