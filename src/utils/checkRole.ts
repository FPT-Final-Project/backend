import httpStatus from 'http-status';
import APIError from './ApiError';

export const checkUserPatient = (req, _res, next) => {
  const { user } = req;
  if (user.role === 'patient') {
    next();
  } else {
    throw new APIError({
      message: 'Access Denied',
      status: httpStatus.FORBIDDEN,
    });
  }
};

export const checkUserDoctor = (req, _res, next) => {
  const { user } = req;
  if (user.role === 'doctor') {
    next();
  } else {
    throw new APIError({
      message: 'You are not a doctor',
      status: httpStatus.FORBIDDEN,
    });
  }
};
