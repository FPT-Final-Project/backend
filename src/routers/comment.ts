import express from 'express';
import { commentController } from '../controllers';
import { isAuth } from '../middlewares/isAuth';
const router = express.Router({ mergeParams: true });

router.post('/', isAuth, commentController.addNewAnswerToQuestion);
export default router;
