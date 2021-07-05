import express from 'express';
import { commentController } from '../controllers';
import { commentValidation } from '../validations/index';
import { validate } from 'express-validation';

import {isAuth} from "../middlewares/isAuth"
const router = express.Router({ mergeParams: true });

router.post("/", isAuth, validate(commentValidation.addNewAnswerToQuestion), commentController.addNewAnswerToQuestion)
export default router
