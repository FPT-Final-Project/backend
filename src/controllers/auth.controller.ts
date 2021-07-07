import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
<<<<<<< HEAD
<<<<<<< HEAD
import catchAsync from '../utils/catchAsync';
import { authService } from '../services';

=======
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../configs';
>>>>>>> 9fda1a9 ( fix yanr lint)
=======
import catchAsync from '../utils/catchAsync';
import { authService } from '../services';

import jwt from "jsonwebtoken";
import {TOKEN_SECRET} from "../configs"
>>>>>>> 24e6097 ( fix som bugs)
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
<<<<<<< HEAD
<<<<<<< HEAD
    res.status(httpStatus.OK).json(user);
  },
=======
    const accessToken = jwt.sign({id: user._id}, TOKEN_SECRET , { expiresIn: '1d' });
    res.status(httpStatus.OK).json({user, accessToken});
=======
    const token = jwt.sign({id: user._id}, TOKEN_SECRET , { expiresIn: '1d' });
    res.status(httpStatus.OK).json({user,token});
>>>>>>> 24e6097 ( fix som bugs)
  }
>>>>>>> 9fda1a9 ( fix yanr lint)
);

export default {
  signup, login,
};
