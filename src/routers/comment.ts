import express from 'express';
import { commentController } from '../controllers';
<<<<<<< HEAD
import { isAuth } from '../middlewares/isAuth';
const router = express.Router({ mergeParams: true });

router.post('/', isAuth, commentController.addNewAnswerToQuestion);
export default router;
=======
import {isAuth} from "../middlewares/isAuth"
const router = express.Router({ mergeParams: true });

router.post("/", isAuth, commentController.addNewAnswerToQuestion)
export default router
>>>>>>> 1835606 ( implement comment api)
