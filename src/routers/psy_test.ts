import express from 'express';
import { psyQuestionController, psyresultController, psytestController } from '../controllers';
import { isAuth } from '../middlewares/isAuth';

const router = express.Router();

router.get('/', psytestController.getAllPsyTests);
router.post('/', isAuth, psytestController.createPsyTest);

// get all Question from psytest

router.get('/:id/question', psyQuestionController.getPsytestQuestionsById);
router.post('/:id/question', isAuth, psyQuestionController.createPsyQuestions);

router.post('/:id/result', psyresultController.createResult);
router.get('/:id/result/:resultId', isAuth, psyresultController.createResult);

// Recomend Doctor
router.get('/suggestion', psyresultController.recommendDoctor);

export default router;
