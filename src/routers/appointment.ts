import express from 'express';
import { isAuth } from '../middlewares/isAuth';
import appointmentController from '../controllers/appointment.controller';
import { checkUserPatient } from '../utils/checkRole';

const router = express.Router();

router.get('/', isAuth, appointmentController.getAppointments);
router.get('/:id', isAuth, appointmentController.getAppointment);
router.post('/make-an-appointment', [isAuth, checkUserPatient], appointmentController.makeAnAppointment);
router.post('/:id/cancel-an-appointment', [isAuth, checkUserPatient], appointmentController.cancelAnAppointment);

export default router;
