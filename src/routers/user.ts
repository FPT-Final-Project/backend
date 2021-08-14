import express from 'express';
import { validate } from 'express-validation';
import { isAuth } from '../middlewares/isAuth';
import { userValidation } from '../validations';
import { userController } from '../controllers';
import upload from '../configs/multer';

const router = express.Router();

// update user information
router.put('/update-profile', isAuth, userController.updateProfile);
router.put('/change-password', isAuth, validate(userValidation.changePassword), userController.changePassword);
router.post('/updateBookingTime', isAuth, userController.updateBookingTime);

router.get('/getMe', isAuth, userController.getMe);
// upload avatar to cloudinary
router.post('/uploadSingle', isAuth, upload.single('image'), userController.uploadAvatar);

// upload avatar for user
router.post('/updateAvatar', isAuth, userController.updateAvatar);

router.get('/:id', isAuth, userController.userProfile);

export default router;
