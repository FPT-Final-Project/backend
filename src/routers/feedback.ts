import express from 'express';
import { isAuth } from '../middlewares/isAuth';
import { checkUserPatient } from '../utils/checkRole';
import feedbackController from '../controllers/feedback.controller';

const router = express.Router();

router.post('/create', [isAuth, checkUserPatient], feedbackController.createFeedback);

export default router;
