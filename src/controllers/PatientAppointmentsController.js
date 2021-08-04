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

// lists all the patient appointments 
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

    } catch (error) {
        res.status(400).json({
            message: "Something went wrong",
            result: error
        });
    } 

    // export const appointmentstatus 

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
// const searchByDate = async (req, res, next) => {

// }

