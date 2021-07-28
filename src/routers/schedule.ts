import express from 'express';
import scheduleController from '../controllers/schedule.controller';
import { isAuth } from '../middlewares/isAuth';
import { checkUserDoctor } from '../utils/checkRole';

const router = express.Router();
router.post('/', [isAuth, checkUserDoctor], scheduleController.createSchedule);
router.delete('/:id', [isAuth, checkUserDoctor], scheduleController.deleteSchedule);
export default router;
