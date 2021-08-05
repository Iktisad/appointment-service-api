import express from 'express';
import { create, filterAppointmentByStatus, filterAppointmnetByDate, getAppointmentById, listAppointments } from '../controllers/PatientAppointmentsController.js';
import { validate, paValidationSchema, dateCheck, appointmetnStatusCheck } from '../middlewares/validator.js';
const router = express.Router();

// GET: api/apointments/:id/all-appointment-list
// send patient id parameter here to view all list of records
router.get('/:id/all-appointment-list',listAppointments);

// GET: api/apointments/:id/filter-appointments-by-date
router.get('/:id/filter-appointments-by-date', dateCheck, validate ,filterAppointmnetByDate);

// GET: api/apointments/:id/view-appointment
// This id is mongoose object id of the specific appointment.
// puuid is also passed in body to ensure only specidied patient appointment is retrieved.
router.get('/:id/view-appointment', getAppointmentById);


// GET: api/apointments/:id/view-appointments-by-status
// this id is puuid and status is sent in body
router.get('/:id/view-appointments-by-status', appointmetnStatusCheck, validate, filterAppointmentByStatus);

// POST: api/apointments/create
router.post('/create', paValidationSchema, validate, create);
// router.patch();
// router.delete();

export default router;