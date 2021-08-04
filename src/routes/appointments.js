import express from 'express';
import { create, filterAppointmnetByDate, getAppointmentById, listAppointments } from '../controllers/PatientAppointmentsController.js';
import { validate, paValidationSchema, dateCheck } from '../middlewares/validator.js';
const router = express.Router();

// send patient id parameter here to view all list of records
router.get('/:id/all-appointment-list',listAppointments);
router.get('/:id/filter-appointments-by-date', dateCheck, validate ,filterAppointmnetByDate);
router.get('/:id/view-appointment', getAppointmentById);
router.post('/create', paValidationSchema, validate, create);
// router.patch();
// router.delete();

export default router;