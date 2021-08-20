import PsytestResult from '../models/psytest/PsytestResult';
import { Psytest, PsytestQuestion, User } from '../models';

const createPsyTest = async (name: string, type: string, description: string) => {
  const psytest = await Psytest.create({
    name, type, description,
  });
  return psytest;
};

const getAllPsyTest = async () => {
  const psytests = await Psytest.find({});
  return psytests;
};

const getPsytestQuestionsById = async (psytestId: string) => {
  const PsytestQuestions = await PsytestQuestion.find({ psyTestId: psytestId });
  return PsytestQuestions;
};

const createPsyQuestions = async (id: string, questionText: string, alternatives: any) => {
  const PsyQuestion = await PsytestQuestion.create({ psyTestId: id, questionText, alternatives });
  return PsyQuestion;
};

const createPsyTestResult = async (userId: string, quizId: string, score: number) => {
  const result = await PsytestResult.create({
    psyTestId: quizId,
    patientId: userId,
    result: score,
  });
  return result;
};
const recommendDoctor = async (quizResult: any) => {
  const { psyTestId } = quizResult;
  const psyTestType: any = await Psytest.findById({ _id: psyTestId });
  const { type } = psyTestType;
  let doctorArray: any = [];
  const doctorsRecommended = await User.aggregate([
    { $match: { role: 'doctor', major: type.toLowerCase() } },
    { $sample: { size: 3 } },
  ]);

  if (doctorsRecommended.length < 3) {
    const doctorsRecommendedAfter = await User.aggregate([
      { $match: { role: 'doctor', major: null } },
      { $sample: { size: 3 - doctorsRecommended.length } },
    ]);
    doctorArray = [...doctorsRecommended, ...doctorsRecommendedAfter];
  }
  return doctorArray;
};

export default {
  getAllPsyTest,
  getPsytestQuestionsById,
  createPsyTest,
  createPsyQuestions,
  createPsyTestResult,
  recommendDoctor,
};
