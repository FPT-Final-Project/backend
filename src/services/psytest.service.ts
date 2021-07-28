import { Psytest, PsytestQuestion } from '../models';

const createPsytest = async (name, type, description) => {
  const psytest = await Psytest.create({
    name, type, description,
  });
  return psytest;
};
const getAllPsytest = async () => {
  const psytests = await Psytest.find({});
  return psytests;
};
const getPsytestQuestionsById = async (psytestId) => {
  const PsytestQuestions = await PsytestQuestion.find({ psyTestId: psytestId });
  return PsytestQuestions;
};
const createPsyQuestions = async (id, questionText, alternatives) => {
  const PsyQuestion = await PsytestQuestion.create({ psyTestId: id, questionText, alternatives });
  return PsyQuestion;
};
export default {
  getAllPsytest, getPsytestQuestionsById, createPsytest, createPsyQuestions,
};
