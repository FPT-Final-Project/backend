import express from 'express';
import { appointmentController } from '../controllers';
import { isAuth } from '../middlewares/isAuth';

const router = express.Router();

router.get('/', isAuth, appointmentController.getAppointments);
router.get('/:id', isAuth, appointmentController.getAppointment);

export default router;
