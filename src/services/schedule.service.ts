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
export default {
  createSchedule, deleteSchedule,
};
