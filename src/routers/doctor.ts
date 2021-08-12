import express from 'express';
import { isAuth } from '../middlewares/isAuth';
import doctorController from '../controllers/doctors.controller';

const router = express.Router();

router.get('/', isAuth, doctorController.getListOfDoctors);
router.get('/:id/detail', isAuth, doctorController.getDoctor);

export default router;
