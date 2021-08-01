import moment from 'moment';
import { IAppointment } from '../models/Appointment';
import { Appointment } from '../models';

const getAppointment = async (userId: string, role: string, appointmentId: string): Promise<IAppointment | null> => {
  const query = {
    ...(role === 'patient' ? { patientId: userId } : { doctorId: userId }),
    _id: appointmentId,
  };

  const appointment = await Appointment.findOne(query);
  return appointment;
};

const getAppointments = async (
  userId: string,
  role: string,
  status = 'active',
  isToday = false,
  name?: string,
): Promise<IAppointment[] | null> => {
  let query = {};
  query = {
    ...(role === 'patient' ? { patientId: userId } : { doctorId: userId }),
    ...(status && { status }),
    ...(name && { name }),
  };

  if (isToday) {
    const today = moment().utc().valueOf();
    query = {
      ...query,
      ...{ startOfAppointment: { $gte: today } },
    };
  }

  const appointments = await Appointment.find(query);
  return appointments;
};

export default {
  getAppointment,
  getAppointments,
};
