import express from 'express';
import { questionController } from '../controllers';
import {isAuth} from "../middlewares/isAuth"
import { questionValidation } from '../validations';
import { validate } from 'express-validation';
import comment from "./comment"
const router = express.Router();

router.post("/ask", isAuth, validate(questionValidation.askNewQuestion) ,questionController.askNewQuestion);
router.get("/", isAuth, questionController.getAllQuestions)

// Routing to comment
router.use("/:questionId/comments", comment)
export default router