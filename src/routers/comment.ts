import express from 'express';
import { commentController } from '../controllers';
<<<<<<< HEAD
import { isAuth } from '../middlewares/isAuth';
const router = express.Router({ mergeParams: true });

router.post('/', isAuth, commentController.addNewAnswerToQuestion);
export default router;
=======
import { commentValidation } from '../validations/index';
import { validate } from 'express-validation';

import {isAuth} from "../middlewares/isAuth"
const router = express.Router({ mergeParams: true });

router.post("/", isAuth, validate(commentValidation.addNewAnswerToQuestion), commentController.addNewAnswerToQuestion)
export default router
>>>>>>> e2b590b ( add validation for question and comment api)
