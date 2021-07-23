import express from 'express';
import { commentController } from '../controllers';
import { isAuth } from '../middlewares/isAuth';
import { checkUserDoctor } from '../utils/checkRole';

const router = express.Router({ mergeParams: true });

router.post('/', [isAuth, checkUserDoctor], commentController.addNewAnswerToQuestion);
export default router;
