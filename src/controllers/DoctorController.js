import mongoose from 'mongoose';
import { AppointmentModel } from '../models/Appointment';

const apstatus = mongoose.AppointmentModel('apstatus', AppointmentModel);

export const updateStatus = (req, res) => {

    apstatus.findOneAndUpdate({})
}
