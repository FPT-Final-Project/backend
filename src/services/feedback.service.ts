/* eslint-disable max-len */
import _ from 'lodash';
import httpStatus from 'http-status';
import Feedback from '../models/patient/Feedback';
import { isAppointmentOwner } from '../utils/isOwner';
import APIError from '../utils/ApiError';

const createFeedback = async (user, appointmentId, rate, description, patientId, doctorId) => {
  const appointment = await Feedback.findOne({ appointmentId });
  if (appointment) {
    throw new APIError({
      message: 'Feedback for this appointment already exists',
      status: httpStatus.BAD_REQUEST,
    });
  }
  await isAppointmentOwner(user, appointmentId);
  const feedback = await Feedback.create(
    {
      appointmentId,
      rate,
      description,
      patientId,
      doctorId,
    },
  );
  return feedback;
};

export default {
  createFeedback,
};
