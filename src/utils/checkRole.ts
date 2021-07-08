import httpStatus from "http-status";
import APIError from "./ApiError";

export function checkUserPatient(req, _res, next) {
  const { user } = req;
  if (user.role === "patient") {
    next();
  } else {
    throw new APIError({
      message: "Access Denined",
      status: httpStatus.FORBIDDEN,
    });
  }
};

export function checkUserDoctor(req, res, next) {
  const { user } = req;
  if (user.role === "doctor") {
    next();
  } else {
    throw new APIError({
      message: "You are not a doctor",
      status: httpStatus.FORBIDDEN,
    });
  }
};
