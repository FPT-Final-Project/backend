import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import * as jwt from 'jsonwebtoken';
import catchAsync from '../utils/catchAsync';
import { authService } from '../services';
import { TOKEN_SECRET } from '../configs';

const register = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const {
      id, name, email, password, role,
    } = req.body;

    const result = await authService.register(
      id,
      name,
      email,
      password,
      role,
    );
    const token = jwt.sign({ id: result._id }, TOKEN_SECRET, { expiresIn: '1y' });

    res.status(httpStatus.CREATED).json({ ...result, token });
  },
);

const login = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const { email, password } = req.body;
    const user = await authService.login(email, password);
    const token = jwt.sign({ id: user._id }, TOKEN_SECRET, { expiresIn: '1y' });

    res.status(httpStatus.OK).json({ ...user, token });
  },
);

export default {
  register,
  login,
};
