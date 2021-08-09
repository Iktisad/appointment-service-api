import mongoose from 'mongoose';
import { AppointmentModel } from '../models/Appointment.js';

//Approve or Cancel Appointment
export const approveAppointment = async (req,res,next) => {
    try {
        const { status } = req.body;
        const appointment = await AppointmentModel.findByIdAndUpdate(req.params.id, {
            status: status
        }, {
            runValidators: true,
            new: true                                        //to return the object after update 
        });
        
        res.status(200).json({
            message: 'Status has been changed',
            result: appointment
        });

        next();

    } catch (error) {
        if (res.statusCode == '200') res.status(400);
        res.json({
            message: 'Something went wrong',
            error: error
        });

        next(error);
    }
}

//Waiver Appointment
export const waiverAppointment = async (req,res,next) => {
    try {
        const { isWaivered } = req.body;
        const appointment = await AppointmentModel.findByIdAndUpdate(req.params.id, {
            isWaivered: isWaivered
        }, {
            runValidators: true,
            new: true
        });
        
        res.status(200).json({
            message: 'Status has been changed',
            result: appointment
        });

        next();

    } catch (error) {
        if (res.statusCode == '200') res.status(400);
        res.json({
            message: 'Something went wrong',
            error: error
        });

        next(error);
    }  
}

//Get all appointment with pagination
export const getAppointments = async (req,res, next) => {

    try {
        /*
        *pagination based on query
        *select can be used to display specific data
        */
        const { page = 1, limit = 10 } = req.query;
        const appointment = await AppointmentModel.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)                       //(page-1) isn't required if page value starts from 0  
            .sort({_id: 'desc'})                            //Sorting in descending order by objectId (desc, asc)
            //.select('startDate');                          
        
        res.status(200).json({
            total: appointment.length,
            message:'Displaying result',
            result: appointment
        });
        
        next();

    } catch (error) {
        if (res.statusCode == '200') res.status(400);
        res.json({
            message: 'Something went wrong',
            error: error
        });

        next(error);                                          //pass error for logging
    }
}

//Get appointments specific to ID 
export const getAppointmentWithID = async (req,res,next) => {
    try {
        let query = {puuid:req.params.id};                     
        const appointmentList = await AppointmentModel.find(query).sort({createdAt: 'desc'});              
        
        res.status(200).json({
            total: appointmentList.length,
            message:'Displaying result',
            result: appointmentList
        });
        
        next();

    } catch (error) {
        if (res.statusCode == '200') res.status(400);
        res.json({
            message: 'Something went wrong',
            error: error
        });

        next(error);
    }
}

//critical path!
//Notify doctor of anynewly created appointment
export const newAppointmentNotify = (req,res) => {
    
}

//critical path! Need payment service.
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

        next();

    } catch (error) {
        if(res.statusCode == '200') res.status(400);
        res.json({
            message:'Something went wrong',
            error: error.toString()
        });

        next(error);
    } 
}



