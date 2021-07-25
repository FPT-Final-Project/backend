import express from 'express';
import questionRoute from './question';
import authRoute from './auth';
import userRoute from './user';
import doctorRoute from './doctor';
import scheduleRoute from './schedule';

const router = express.Router();

router.use('/auth', authRoute);
router.use('/questions', questionRoute);
router.use('/user', userRoute);
router.use('/doctors', doctorRoute);
router.use('/schedule', scheduleRoute);
export default router;
