import express from 'express';
import { create, listAppointments } from '../controllers/PatientAppointmentsController.js';
import { validate, paValidationSchema } from '../middlewares/validator.js';
const router = express.Router();

// send patient id parameter here to view all list of records
router.get('/:id/all-appointment-list',listAppointments);
router.post('/create', paValidationSchema, validate, create);
// router.patch();
// router.delete();

export default router;