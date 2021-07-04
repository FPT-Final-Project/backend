import { NextFunction, Request, Response } from 'express';

export const wrapMiddleWare = (fn: Function) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(error => console.log('Error ', error));

