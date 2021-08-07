import mongoose from 'mongoose';
import { AppointmentModel } from '../models/Appointment.js';

//Approve or Cancel Appointment
export const approveAppointment = (req,res) => {
    
}

//Waiver Appointment
export const waiverAppointment = (req,res) => {
    
}

//Get all appointment with pagination
export const getAppointments = async (req,res, next) => {

    try {
        /*
        *pagination based on query
        */
        const { page = 1, limit = 10 } = req.query;
        const appointment = await AppointmentModel.find()
            .limit(limit * 1)
            .skip((page - 1) * limit);

        res.status(200).json({
            total: appointment.length,
            message:'Displaying result',
            result: appointment
        });
        
    } catch (error) {
        if (res.statusCode == '200') res.status(400);
        res.json({
            message: 'Something went wrong',
            error: error
        });
    }

    // AppointmentModel.find((err, appointment) => {
    //     if(err) {
    //         res.send(err);
    //     }
    //     res.json(appointment);
    // });
}

//Get appointments specific to ID
export const getAppointmentWithID = (req,res) => {
    AppointmentModel.findById(req.params.id, (err, appointment) => {
        if(err) {
            res.send(err);
        }
        res.json(appointment);
    });
}

//Notify doctor of anynewly created appointment
export const newAppointmentNotify = (req,res) => {
    
}


//Provide patient count for the day
export const patientCount = (req,res) => {
    
}

//List appointment from and to date range
export const listAppointmentByDate = async (req,res,next) => {
    // check if date query exists
    // check if start date is less than end date or throw invalid input exception
    try {

        const {startDate, endDate} = req.body
        const puuid = req.params.id;
        if (Date.parse(endDate) <= Date.parse(startDate)) {
            res.status(400);
            throw new Error('BAD REQUEST: 400!! END date cannot be before START date');
        }
        
        const list = await AppointmentModel.find({
            puuid: puuid,
            startDate: {
                "$gte": startDate,
                "$lt": endDate
            }
        });

        res.status(200).json({
            message:'Displaying Results',
            result: list
        });

    } catch (error) {
        if(res.statusCode == '200') res.status(400);
        res.json({
            message:'Something went wrong',
            error: error.toString()
        });
    } 
}

//Sort appointment by date (descending or ascending)
export const sortAppointment = (req,res) => {
    
}

//List appointment history from most recent to least
export const appointmentHistory = (req,res) => {
    
}


