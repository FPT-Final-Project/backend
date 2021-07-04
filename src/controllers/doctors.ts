import { NextFunction, Request, Response } from 'express';
import { wrapMiddleWare } from '../utils/middleware';

const getDoctors = wrapMiddleWare(
  async (req: Request, res: Response, _: NextFunction) => {

  },
);

export default {
  getDoctors,
};
