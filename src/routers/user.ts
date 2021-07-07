import express from 'express';
import {isAuth} from "../middlewares/isAuth"
// import { validate } from 'express-validation';
import { userController } from '../controllers';
const router = express.Router();

router.post("/update-profile", isAuth,userController.updateProfile)
export default router