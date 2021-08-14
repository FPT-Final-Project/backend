import _ from 'lodash';
import { IAppointment } from '../models/appointment';
import { IUser } from '../models/User';
import { Appointment } from '../models';
import { isAppointmentOwner } from '../utils/isOwner';

const getAppointment = async (user: IUser, appointmentId: string): Promise<IAppointment | null> => {
  const appointment = await Appointment.findOne({
    $or: [{ patientId: user.id }, { doctorId: user.id }],
    _id: appointmentId,
  });
  return appointment;
};

const getAppointments = async (user: IUser) => {
  const appointments = await Appointment.find({ $or: [{ patientId: user.id }, { doctorId: user.id }] });
  return _.map(
    appointments,
    _.partialRight(
      _.pick,
      [
        '_id',
        'name',
        'startOfAppointment',
        'endOfAppointment',
        'patientId',
        'patientName',
        'doctorId',
        'doctorName',
        'status',
        'isCanceled',
        'createdAt',
      ],
    ),
  );
};

const makeAnAppointment = async (
  patientId: string,
  patientName: string,
  name: string,
  startOfAppointment: number,
  endOfAppointment: number,
  doctorId: string,
  doctorName: string,
) => {
  const appointment = await Appointment.create(
    {
      name,
      startOfAppointment,
      endOfAppointment,
      patientId,
      patientName,
      doctorId,
      doctorName,
      status: 'active',
    },
  );
  return appointment;
};

const cancelAnAppointment = async (user: IUser, appointmentId) => {
  await isAppointmentOwner(user, appointmentId);
  await Appointment.findOneAndUpdate({ _id: appointmentId }, { status: 'inActive', isCanceled: true });
  const n = new Date().getTime();
  const appointments = await Appointment.find({
    $or: [{ patientId: user.id }, { doctorId: user.id }],
    status: 'active',
    endOfAppointment: { $gte: n },
  });

  return _.map(
    appointments,
    _.partialRight(
      _.pick,
      [
        '_id',
        'name',
        'startOfAppointment',
        'endOfAppointment',
        'patientId',
        'patientName',
        'doctorId',
        'doctorName',
        'status',
        'isCanceled',
        'createdAt',
      ],
    ),
  );
};

const checkAppointment = async (patientId: string, doctorId: string, startOfAppointment: number) => {
  const patientAppointments = await Appointment.find({ patientId, startOfAppointment });
  const doctorAppointments = await Appointment.find({ doctorId, startOfAppointment });

  return !!((patientAppointments && patientAppointments.length) || (doctorAppointments && doctorAppointments.length));
};

export default {
  getAppointment,
  getAppointments,
  makeAnAppointment,
  cancelAnAppointment,
  checkAppointment,
};
