import mongoose from 'mongoose';
import { AppointmentModel } from '../models/Appointment.js';

// const Appointment = mongoose.model('Appointment', AppointmentModel);

// export const addNewContact = (req,res) => {
//     let newContact = new Contact(req.body);

//     newContact.save((err, contact) => {
//         if(err) {
//             res.send(err);
//         }
//         res.json(contact);
//     });
// }

export const getAppointments = (req,res) => {
    AppointmentModel.find((err, appointment) => {
        if(err) {
            res.send(err);
        }
        res.json(appointment);
    });
}


export const getAppointmentWithID = (req,res) => {
    AppointmentModel.findById(req.params.id, (err, appointment) => {
        if(err) {
            res.send(err);
        }
        res.json(appointment);
    });
}

// export const updateContact = (req,res) => {
//     Contact.findOneAndUpdate({ _id: req.params.contactID}, req.body, { new: true, useFindAndModify: false}, (err, contact) => {
//         if(err) {
//             res.send(err);
//         }
//         res.json(contact);
//     });
// }

// export const deleteContact = (req,res) => {
//     Contact.remove({ _id: req.params.contactID}, (err, contact) => {
//         if(err) {
//             res.send(err);
//         }
//         res.json({ message: 'Successfully deleted contact' });
//     });
// }