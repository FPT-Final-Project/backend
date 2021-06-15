import httpStatus from "http-status";
import { ValidationError } from "express-validation";
import APIError from "../utils/ApiError";

export const handler = (err, _req, res, _next) => {
    const response = {
      code: err.code || err.status,
      message: err.message || httpStatus[err.status],
      errors: err.errors,
      stack: err.stack,
    };
    res.status(err.status);
    res.json(response);
    res.end();
  };
export const converter = (err, req, res, _next) => {
    let convertedError = err;
    if (err instanceof ValidationError) {
      convertedError = new APIError({
        message: "Invalid input data",
        errors: err.details.body || err.details.query || err.details.params|| null as any ,
        status: err.statusCode,
      });
    } else if (!(err instanceof APIError)) {
      convertedError = new APIError({
        message: err.message,
        status: err.status,
        stack: err.stack,
      });
    }
  
    return handler(convertedError, req, res, _next);
  };
export const  routeNotFound = (req, res, _next) => {
    const err = new APIError({
      message: `API not found: ${req.method} ${req.originalUrl}`,
      status: httpStatus.NOT_FOUND,
    });
    return handler(err, req, res, _next);
  };