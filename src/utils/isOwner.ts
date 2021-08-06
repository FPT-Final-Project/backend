import httpStatus from 'http-status';
import { Schedule, Appointment } from '../models';
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
const isAppointmentOwner = async (user, appointmentId) => {
  const appointment = await Appointment.findOne({ _id: appointmentId });
  if (!appointment) {
    throw new APIError({
      message: 'Appointment not found',
      status: httpStatus.NOT_FOUND,
    });
  }
  if (appointment.patientId.toString() !== user._id.toString()) {
    throw new APIError({
      message: 'User are not the owner of the Appointment',
      status: httpStatus.BAD_REQUEST,
    });
  }
};

export { isScheduleOwner, isAppointmentOwner };
