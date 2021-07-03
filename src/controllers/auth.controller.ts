import catchAsync from '../utils/catchAsync';
import { NextFunction, Request, Response } from 'express';
import { authService } from '../services';
import httpStatus from 'http-status';

const signup = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { firstName, lastName, email, password, role } = req.body;
    const result = await authService.signup(
      firstName,
      lastName,
      email,
      password,
      role
    );
    res.status(httpStatus.CREATED).json(result);
  }
);
const login = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { email, password } = req.body;
    const user = await authService.login(email, password);
    res.status(httpStatus.OK).json(user);
  }
);

export default {
    signup, login
};
