/* eslint-disable max-len */
import _ from 'lodash';
import { IAppointment } from 'models/appointment';
import { IUser } from 'models/User';
import { Appointment } from '../models';
import { isAppointmentOwner } from '../utils/isOwner';

const getAppointment = async (user: IUser, appointmentId: string): Promise<IAppointment | null> => {
  const appointment = await Appointment.findOne({ $or: [{ patientId: user.id }, { doctorId: user.id }], _id: appointmentId });
  return appointment;
};

const getAppointments = async (user: IUser) => {
  const appointments = await Appointment.find({ $or: [{ patientId: user.id }, { doctorId: user.id }], status: 'active' });
  return _.map(appointments, _.partialRight(_.pick, ['_id', 'name', 'startOfAppointment', 'endOfAppointment', 'patientId', 'patientName', 'doctorId', 'doctorName', 'status', 'isCanceled', 'createdAt']));
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

const cancelAnAppointment = async (user: IUser, appointmentId) => {
  await isAppointmentOwner(user, appointmentId);
  return Appointment.findOneAndUpdate({ _id: appointmentId }, { status: 'inActive', isCanceled: true });
};

export default {
  getAppointment, getAppointments, makeAnAppointment, cancelAnAppointment,
};
