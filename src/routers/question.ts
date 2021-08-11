import express from 'express';
import { validate } from 'express-validation';
import { isAuth } from '../middlewares/isAuth';
import { questionController } from '../controllers';
import { questionValidation } from '../validations';
import { checkUserPatient } from '../utils/checkRole';
import comment from './comment';

const router = express.Router();

router.post('/ask',
  [isAuth, checkUserPatient],
  validate(questionValidation.askNewQuestion),
  questionController.askNewQuestion);

router.get('/', isAuth, questionController.getAllQuestions);

router.get('/ownerQuestion', [isAuth, checkUserPatient], questionController.getOwnerQuestion);
// Routing to comment
router.use('/:questionId/comments', comment);
export default router;
