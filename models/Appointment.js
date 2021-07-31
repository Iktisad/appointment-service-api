import mongoose from "mongoose";
// import User from './User.js';
// import { ResourceModel } from "./Resource.js";

// rules defined for attributes
const reqString = {
    type: String,
    required:true,
};

const reqDate = {
    type:Date,
    required:true
};

const reqNumber = {
    type: Number,
    required:true
};
const resourceFkId = {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resource',
    required:true
};

const userFkId = {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true
};
const appointmentSchema = mongoose.Schema({
    
    resourceId: resourceFkId,            // doctor id.
    resourceName: reqString,             // doctor name
    Specialist: reqString,               // Med / Card / Neuro,
    userId: userFkId,                    // patient Id
    userName: reqString,                 // patient name,
    startDate: reqDate,                  // appointment start date
    endDate: Date,                       // appointment end date
        

    /* 
        appointment status {cancelled, approved, waiting} 
        cancelled -- client/patient cancels an appointment
        approved -- when doctor approves the appointment in the given slot or default auto approved
        waiting -- when default auto approve is turned off,
        patient needs to wait for appointment confirmation
    */
    status: reqString,                                 
    userContact: reqString,
    location: reqString,
    description: String,                // small description of the problem or message to the doctor
    appointmentType: reqString,         // type can be Home Consultation(telemedicine/online),In-Person,
    // Fee:reqNumber,                      // payment must be done for an appointment to avoid any spamming,
    isWaivered: Boolean,                // doctor has the option to waiver fee.
    
});

export const AppointmentModel = mongoose.model('appointments', appointmentSchema)