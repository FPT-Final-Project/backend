import { Response, NextFunction } from 'express';
import { IRequest } from '../configs/request';
import { User } from '../models';
import { getToken, verifyToken } from '../utils/jwt';

const isAuth = async (req: IRequest, _res: Response, next: NextFunction) => {
  try {
    const token = getToken(req);
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id);

    if (user) {
      req.user = user;
    }
    next();
  } catch (err) {
    next(err);
  }
};

export {
  isAuth,
};
