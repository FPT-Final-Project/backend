import express from 'express';
import { validate } from 'express-validation';
import { isAuth } from '../middlewares/isAuth';
import { userValidation } from '../validations';
import { userController } from '../controllers';
import upload from '../configs/multer';

const router = express.Router();
router.put('/update-profile', isAuth, validate(userValidation.updateProfile), userController.updateProfile);
router.put('/change-password', isAuth, validate(userValidation.changePassword), userController.changePassword);

// upload avatar to cloudinary
router.post('/uploadSingle', isAuth, upload.single('image'), userController.uploadAvatar);

// upload avatar for user
router.post('/updateAvatar', isAuth, userController.updateAvatar);
export default router;
