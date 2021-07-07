import { NextFunction, Request, Response } from 'express';
import { wrapMiddleWare } from '../utils/middleware';

export const getPermission = wrapMiddleWare(
  async (req: Request, res: Response, next: NextFunction) => {
    const { _id } = req.body;
    console.log('Body : ', req.body);
    next();
  }
);

export const authenticate = async (req: Request, res: Response) => {
  const { _id } = req.body;
  console.log('Req : ', req.body);
  res.json({ _id });
};

export const logout = () => {};
