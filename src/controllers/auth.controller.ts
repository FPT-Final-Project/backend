import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { authService } from '../services';
import jwt from "jsonwebtoken";
import {TOKEN_SECRET} from "../configs"
const signup = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const {
      firstName, lastName, email, password, role,
    } = req.body;
    const result = await authService.signup(
      firstName,
      lastName,
      email,
      password,
      role,
    );
    res.status(httpStatus.CREATED).json(result);
  },
);

const login = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { email, password } = req.body;
    const user = await authService.login(email, password);
    const token = jwt.sign({id: user._id}, TOKEN_SECRET , { expiresIn: '1d' });
    res.status(httpStatus.OK).json({user,token});
  }
);

export default {
  signup, login,
};
