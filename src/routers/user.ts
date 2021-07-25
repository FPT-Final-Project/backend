import express from 'express';
import { validate } from 'express-validation';
import { isAuth } from '../middlewares/isAuth';
import { userValidation } from '../validations';
import { userController } from '../controllers';
import upload from '../configs/multer';

const router = express.Router();
router.put('/update-profile', isAuth, validate(userValidation.updateProfile), userController.updateProfile);
router.put('/change-password', isAuth, validate(userValidation.changePassword), userController.changePassword);
router.post('/uploadSingle', isAuth, upload.single('image'), userController.uploadAvatar);
export default router;
