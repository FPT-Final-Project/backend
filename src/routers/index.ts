import express from 'express';
import questionRoute from "./question"
import authRoute from './auth';
const router = express.Router();

router.use('/auth', authRoute);
router.use('/questions', questionRoute)
export default router;