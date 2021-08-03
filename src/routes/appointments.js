import express from 'express';
import { create, listAppointments } from '../controllers/PatientAppointmentsController.js';
import { appointmentValidation, paValidationSchema } from '../middlewares/validator.js';
const router = express.Router();

router.get('/all-appointment-list', listAppointments);
router.post('/create', paValidationSchema, appointmentValidation, create);
// router.patch();
// router.delete();

export default router;