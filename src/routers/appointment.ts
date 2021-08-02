import express from 'express';
import { isAuth } from '../middlewares/isAuth';
import appointmentController from '../controllers/appointment.controller';
import { checkUserPatient } from '../utils/checkRole';

const router = express.Router();

router.post('/:id/cancel-an-appointment', [isAuth, checkUserPatient], appointmentController.cancelAnAppointment);
router.get('/getappointments', isAuth, appointmentController.getAppointments);
router.post('/make-an-appointment', [isAuth, checkUserPatient], appointmentController.makeAnAppointment);

export default router;
