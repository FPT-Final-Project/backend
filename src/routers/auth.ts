import express from 'express';
import { validate } from 'express-validation';
import authController from '../controllers/auth.controller';
import { authValidation } from '../validations/index';

const router = express.Router();

router.post('/login/:token', authController.loginWithToken);
router.post('/login', validate(authValidation.login), authController.login);
router.post('/register', validate(authValidation.register), authController.register);

export default router;
