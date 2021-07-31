import mongoose from "mongoose";
// import User from './User.js';
// import { ResourceModel } from "./Resource.js";

// rules defined for attributes
const duuidString = {
    type:String,
    required:true,
    minlength:9,
    maxlength:9
};
const puuidString = {
    type:String,
    required:true,
    minlength:9,
    maxlength:9
};

const reqString = {
    type: String,
    required:true,
    minlength:3,
    maxlength:255
};

const reqDate = {
    type:Date,
    required:true
};

const reqNumber = {
    type: Number,
    required:true,
    min:1
};
const resourceFkId = {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resource',
    required:true
};
// ===============================================================================================================================

const geoSchema = mongoose.Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

// ===============================================================================================================================
const appointmentSchema = mongoose.Schema({
    
    duuid: duuidString,            // doctor id.
    doctorName: reqString,         // doctor name
    specialist: reqString,         // Med / Card / Neuro,
    puuid: puuidString,                    // patient Id
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
    address: {

        country: reqString,
        city: reqString,
        area: reqString,
        zipcode: reqString,
        location: geoSchema,
    },
    description: String,                // small description of the problem or message to the doctor
    appointmentType: reqString,         // type can be Home Consultation(telemedicine/online),In-Person,
    fee: reqNumber,                      // payment must be done for an appointment to avoid any spamming,
    isWaivered: Boolean,                // doctor has the option to waiver fee.
    
});

export const AppointmentModel = mongoose.model('appointments', appointmentSchema)