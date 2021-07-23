import { NextFunction, Request, Response } from 'express';

export default (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};
