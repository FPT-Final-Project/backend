import httpStatus from 'http-status';
import { Schedule } from '../models';
import APIError from './ApiError';

const isScheduleOwner = async (doctorId, scheduleId) => {
  const schedule = await Schedule.findOne({ _id: scheduleId });
  if (!schedule) {
    throw new APIError({
      message: 'Schedule not found',
      status: httpStatus.NOT_FOUND,
    });
  }
  if (schedule.doctorId.toString() !== doctorId.toString()) {
    throw new APIError({
      message: 'User are not the owner of the schedule',
      status: httpStatus.BAD_REQUEST,
    });
  }
};

export { isScheduleOwner };
