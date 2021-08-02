/* eslint-disable max-len */
import _ from 'lodash';
import { Appointment } from '../models';
import { isAppointmentOwner } from '../utils/isOwner';

const getAppointments = async (user) => {
  const appointments = await Appointment.find({ $or: [{ patientId: user.id }, { doctorId: user.id }] });
  return _.map(appointments, _.partialRight(_.pick, ['_id', 'name', 'startOfAppointment', 'endOfAppointment', 'patientId', 'patientName', 'doctorId', 'doctorName', 'status']));
};
const makeAnAppointment = async (user, name, startOfAppointment, endOfAppointment, doctorId, doctorName) => {
  const appoitnment = await Appointment.create(
    {
      name,
      startOfAppointment,
      endOfAppointment,
      patientId: user.id,
      patientName: user.name,
      doctorId,
      doctorName,
      status: 'active',
    },
  );
  return appoitnment;
};
const cancelAnAppointment = async (user, appointmentId) => {
  await isAppointmentOwner(user, appointmentId);
  return Appointment.findOneAndUpdate({ _id: appointmentId }, { status: 'inActive' });
};

export default {
  getAppointments, makeAnAppointment, cancelAnAppointment,
};
