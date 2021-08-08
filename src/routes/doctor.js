import express from 'express';
import { getAppointments, 
         getAppointmentWithID,
         approveAppointment,
         waiverAppointment, 
         listAppointmentByDate,
        } from '../controllers/DoctorAppointmentController.js';
// import { validate, paValidationSchema } from '../middlewares/validator.js';
const router = express.Router();

// send patient id parameter here to view all list of records
router.get('/search/:id', getAppointmentWithID);
router.get('/search', getAppointments);
router.get('/list-appointment-bydate/:id', listAppointmentByDate);
router.put('/approve-appointment/:id', approveAppointment);
router.put('/waiver-appointment/:id', waiverAppointment);
// router.patch();
// router.delete();

export default router;

// import {  getAppointments,
//           getAppointmentWithID,
// } from '../controllers/DoctorAppointmentController'

// const routes = (app) => {
// app.route('/appointment')
//    .get((req, res, next) => {
//    //middleware
//        console.log(`Request from: ${req.originalUrl}`)
//        console.log(`Request type: ${req.method}`)
//        next();
//    }, getAppointments)

//    //Post endpoint
//    //.post(addNewAppointment);

// app.route('/appointment/:appointmentID')
//    // get a specific contact
//    .get(getAppointmentWithID)

// }

// export default routes;