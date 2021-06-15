import httpStatus from "http-status";

class ExtendableError extends Error {
  code: any;
  errors: any;
  status: any;
  isPublic: any;
  isOperational: boolean;
  constructor({ message, code, errors, status, isPublic, stack }) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.code = code;
    this.errors = errors;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
    this.stack = stack;
  }
}
class APIError extends ExtendableError {
  constructor({
    message,
    code = null,
    errors = null,
    stack = null,
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
