import express from 'express';
import { getAppointments, 
         getAppointmentWithID,
         approveAppointment,
         waiverAppointment, 
         listAppointmentByDate,
        } from '../controllers/DoctorAppointmentController.js';   
import { validate, appointmetnStatusCheck, dateCheck } from '../middlewares/validator.js';

const router = express.Router();

// GET: api/appointemnt-doctor/search
// view all the appointments specific 
router.get('/search', getAppointments);

// GET: api/apointment-doctor/search/id
// view all the appointments specific to puuid instead of the mongoose object id
router.get('/search/:id', getAppointmentWithID);

// GET: api/apointment-doctor/list-appointment-bydate/id
// view all the appointments specific to a date range
router.get('/list-appointment-bydate/:id', dateCheck, validate, listAppointmentByDate);

// PUT api/appointment-doctor/approve-appointment/id
// update the appointment status
router.put('/approve-appointment/:id', appointmetnStatusCheck, validate, approveAppointment);

// PUT api/appointment-doctor/waiver-appointment/id
// update the waiver status
router.put('/waiver-appointment/:id', waiverAppointment);

// router.patch();
// router.delete();

export default router;
