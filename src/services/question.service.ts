import { Question } from '../models';

const askNewQuestion = async (information, req) => {
  const question = await Question.create({
    ...information,
    patientId: req.user._id,
  });
  return question;
};

const getAllQuestions = async () => {
  const allQuestion = await Question.find({});
  return allQuestion;
};
const getOwnerQuestion = async (user: any) => {
  const ownerQuestions = await Question.find({ patientId: user.id });
  return ownerQuestions;
};
export default {
  askNewQuestion,
  getAllQuestions,
  getOwnerQuestion,
};
