import express from 'express';
import questionRoute from "./question"
import authRoute from './auth';
import userRoute from "./user"
const router = express.Router();

router.use('/auth', authRoute);
router.use('/questions', questionRoute)
router.use('/user', userRoute)
export default router;