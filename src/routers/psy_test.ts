import express from 'express';
import { psyQuestionController, psytestController } from '../controllers';
import { isAuth } from '../middlewares/isAuth';

const router = express.Router();

router.get('/', isAuth, psytestController.getAllPsytests);
router.post('/', isAuth, psytestController.createPsytest);

// get all Question from psytest

router.get('/:id/question', isAuth, psyQuestionController.getPsytestQuestionsById);
router.post('/:id/question', isAuth, psyQuestionController.createPsyQuestions);
export default router;
