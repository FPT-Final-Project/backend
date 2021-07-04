import express from 'express';
import doctors from '../controllers/doctors';

const router = express.Router();

router.get('/:type', doctors.getDoctors);

export default {
  router,
};
