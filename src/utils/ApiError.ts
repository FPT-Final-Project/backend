import httpStatus from 'http-status';
import ExtendableError from './ExtendableError';

class APIError extends ExtendableError {
  constructor({
    message,
    code = undefined,
    errors = undefined,
    stack = undefined,
    status = httpStatus.INTERNAL_SERVER_ERROR,
    isPublic = false,
  }) {
    super({
      message,
      code,
      errors,
      status,
      isPublic,
      stack,
    });
  }
}
export default APIError;
