import express from 'express';
import scheduleController from '../controllers/schedule.controller';
import { isAuth } from '../middlewares/isAuth';
import { checkUserDoctor } from '../utils/checkRole';

const router = express.Router();
router.post('/create', [isAuth, checkUserDoctor], scheduleController.createSchedule);
router.delete('/:id/delete', [isAuth, checkUserDoctor], scheduleController.deleteSchedule);
router.get('/:id', isAuth, scheduleController.getSchedulesToday);
router.post('/:id', isAuth, scheduleController.updateSchedule);
export default router;
