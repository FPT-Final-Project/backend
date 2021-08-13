import express from 'express';
import { isAuth } from '../middlewares/isAuth';
import appointmentController from '../controllers/appointment.controller';
import { checkUserPatient } from '../utils/checkRole';

const router = express.Router();

router.get('/', isAuth, appointmentController.getAppointments);
router.get('/:id', isAuth, appointmentController.getAppointment);
router.post('/create', [isAuth, checkUserPatient], appointmentController.makeAnAppointment);
router.post('/check', [isAuth, checkUserPatient], appointmentController.checkAppointment);
router.post('/:id/cancel', [isAuth, checkUserPatient], appointmentController.cancelAnAppointment);

export default router;
