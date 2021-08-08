import { Schedule } from '../models';
import { isScheduleOwner } from '../utils/isOwner';

const createSchedule = async (fromTime, toTime, doctor) => {
  const schedule = await Schedule.create({ doctorId: doctor.id, fromTime, toTime });
  return schedule;
};
const deleteSchedule = async (id, user) => {
  await isScheduleOwner(user.id, id);
  await Schedule.deleteOne({ _id: id });
  return { id };
};
const getSchedulesToday = async (id) => {
  const today = new Date().getTime();
  const schedules = await Schedule.find({
    fromTime: {
      $gte: today,
      $lte: today + 86400000,
    },
    doctorId: id,
    status: 'active',
  });
  return schedules;
};
const updateSchedule = async (id) => {
  const schedule = await Schedule.findOneAndUpdate({ _id: id }, { status: 'inActive' });
  return schedule;
};
export default {
  createSchedule, deleteSchedule, getSchedulesToday, updateSchedule,
};
