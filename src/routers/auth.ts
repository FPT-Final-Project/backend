import express from "express";
import authController from "../controllers/auth.controller"
import { authValidation } from "../validations/index";
import {validate } from "express-validation"
const router = express.Router();

router.post(
    "/signup",validate(authValidation.signup), authController.signup
);
router.post("/login",validate(authValidation.login), authController.login);
export default router