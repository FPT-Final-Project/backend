import { Payment } from '../models';

const createPayment = (
  appointmentId: string,
  appointmentName: string,
  patientId: string,
  patientName: string,
  doctorId: string,
  doctorName: string,
  amount: string,
  payType: string,
  transId: string,
) => {
  Payment.create({
    appointmentId,
    appointmentName,
    patientId,
    patientName,
    doctorId,
    doctorName,
    amount,
    payType,
    transId,
  });
};

export default { createPayment };
