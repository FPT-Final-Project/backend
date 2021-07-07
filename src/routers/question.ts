import express from 'express';
import { questionController } from '../controllers';
<<<<<<< HEAD
import { isAuth } from '../middlewares/isAuth';
import comment from './comment';
const router = express.Router();

router.post('/ask', isAuth , questionController.askNewQuestion);
router.get('/', isAuth, questionController.getAllQuestions);

// Routing to comment
router.use('/:questionId/comments', comment);
export default router;
=======
import {isAuth} from "../middlewares/isAuth"
import comment from "./comment"
const router = express.Router();

router.post("/ask", isAuth ,questionController.askNewQuestion);
router.get("/", isAuth, questionController.getAllQuestions)

// Routing to comment
router.use("/:questionId/comments", comment)
export default router
>>>>>>> 1835606 ( implement comment api)
