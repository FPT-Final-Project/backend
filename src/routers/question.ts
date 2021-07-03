import express from 'express';
import { questionController } from '../controllers';
import {isAuth} from "../middlewares/isAuth"
const router = express.Router();

router.post("/ask", isAuth ,questionController.askNewQuestion);
export default router