
import { AppointmentModel } from '../models/Appointment.js'


// creates a patient appointment in the system
export const create = async (req, res, next)=>{

    try {
        
        const appointment = await AppointmentModel.create(req.body);
        // console.log("Reached Create");
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
// lists all the patient appointments 
export const listAppointments = async(req, res, next)=> {
    
    try {

        const list = await AppointmentModel.find({})
        
        res.status(200).json({
            message: "showing all list here",
            result: list
        });

    } catch (error) {
        res.status(400).json({
            message: "Something went wrong",
            result: error
        });
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
const requestChange = (req, res, next) => {

}
/**
 * filter by date (recent to stale)
 * filter results by date range
 * filter by doctor name or specialist tag
 */
// const searchByDate = async (req, res, next) => {

// }
 
// const searchByName = async (req, res, next) => {

// }
    // async cancel(req, res, next){

    // }