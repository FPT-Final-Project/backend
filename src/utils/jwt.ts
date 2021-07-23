import { Request } from 'express';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../configs';
import APIError from './ApiError';

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, TOKEN_SECRET);

    return decoded;
  } catch (error) {
    throw new APIError({
      message: 'Invalid Token',
      status: httpStatus.UNAUTHORIZED,
    });
  }
};

export const getToken = (req: Request) => {
  const authHeader = req.headers.authorization;
  let token = (authHeader || '').split(' ')[1];

  if (!token) {
    token = req.cookies.token;
  }

  return token;
};
