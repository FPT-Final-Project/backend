import express from 'express';
import questionRoute from './question';
import authRoute from './auth';
import userRoute from './user';
import doctorRoute from './doctor';
import scheduleRoute from './schedule';
import psytestRoute from './psy_test';
import { momoController } from '../controllers';
import appointmentRoute from './appointment';
import feedbackRoute from './feedback';

const router = express.Router();

router.use('/auth', authRoute);
router.use('/questions', questionRoute);
router.use('/user', userRoute);
router.use('/doctors', doctorRoute);
router.use('/schedule', scheduleRoute);
router.use('/psytest', psytestRoute);
router.use('/payment/momo', momoController.requestFromMomo);
router.use('/appointment', appointmentRoute);
router.use('/feedback', feedbackRoute);

export default router;
