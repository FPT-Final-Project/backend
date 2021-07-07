import express from 'express';
import { isAuth } from '../middlewares/isAuth';
import { validate } from 'express-validation';
import { userValidation } from '../validations';
import { userController } from '../controllers';
const router = express.Router();

router.post('/update-profile', isAuth, validate(userValidation.updateProfile), userController.updateProfile);
export default router;