
import { AppointmentModel } from '../models/Appointment.js'


// creates a patient appointment in the system
export const create = async (req, res, next)=>{

    try {
       
        const appointment = await AppointmentModel.create(req.body);
        
        res.status(201).json({
            message:'Appointment Created',
            results: appointment
        });
        next();

    } catch (error) {
        res.status(400).json({
            message:'Something Went Wrong',
            error: error
        });
        console.log(req.body);
        next(error);
    }
}
// lists all the patient appointments either from the page or from the search bar
export const listAppointments = async(req, res, next)=> {
    
    try {
         /**
         * filter by date (recent to oldest)
         * filter by doctor name or specialist tag
         */
        let query;
        // console.log(Object.keys(req.query));
        if(Object.keys(req.query).length > 0){
            // check query params
            query = {
                puuid:req.params.id,
                $or:[
                    {specialist:{ $regex: req.query.search, $options: 'i' }},
                    {doctorName:{ $regex: req.query.search, $options: 'i' }}
                    
                ]
           };
            
        }else{
            query = {puuid:req.params.id};
        }
        const list = await AppointmentModel.find(query).sort({createdAt: 'desc'});
        
        res.status(200).json({
            message: "showing all list here",
            result: list
        });
        next();

    } catch (error) {
        res.status(400).json({
            message: "Something went wrong",
            error: error
        });
        next();
    } 

};
// appointment details
export const getAppointmentById = async(req,res,next) => {

    try {
        const puuid = req.body.puuid;
        const appointment = await AppointmentModel.findById(req.params.id);

        if (appointment.puuid !== puuid) {
            res.status(403);
            throw new Error('Request Forbidden 403.').toString();
        } 
        res.status(200).json({
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
        next();
    }

};
// cancel is an appointment update request 
// which only changes the status of the appointment
export const cancel = async(req,res,next) => {
    
    // console.log(req.body);
}

/**
 * request change is an appointment request to doctor to reschedule the time
 */
// const requestChange = (req, res, next) => {

// }
/**
 * filter results by date range
 */
export const filterAppointmnetByDate = async (req, res, next) => {
    // check if date query exists
    // check if start date is less than end date or throw invalid input exception
    try {

        const {startDate, endDate} = req.body
        const puuid = req.params.id;
        if (Date.parse(endDate) <= Date.parse(startDate)) {
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

        res.status(400).json({
            message:'Something went wrong',
            error: error.toString()
        });
        next()
    } 
   
}