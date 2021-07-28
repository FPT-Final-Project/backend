import httpStatus from 'http-status';
import _ from 'lodash';
import APIError from '../utils/ApiError';
import { Comment, Question } from '../models';

const addNewAnswerToQuestion = async (information, req, questionId) => {
  const question = await Question.findById(questionId);
  if (!question) {
    throw new APIError({
      message: 'Question not exist',
      status: httpStatus.NOT_FOUND,
    });
  }

  const comment = await Comment.create({
    ...information,
    doctorId: req.user._id,
    questionId,
  });

  return comment;
};
const getAllAnswersOfQuestion = async (questionId) => {
  const comments = await Comment.find({ questionId });
  return _.map(comments, _.partialRight(_.pick, ['description', 'doctorId', 'createdAt']));
};
export default {
  addNewAnswerToQuestion, getAllAnswersOfQuestion,
};
