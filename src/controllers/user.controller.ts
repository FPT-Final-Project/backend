import catchAsync from "../utils/catchAsync";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { userService } from "../services";

const updateProfile = catchAsync(
    async (req: Request, res: Response, _next: NextFunction) => {
      const {firstName, lastName, phone, address} = req.body;

      await userService.updateProfile(req, firstName, lastName, phone, address)
        res.status(httpStatus.OK).end()
    }
);
export default {updateProfile}