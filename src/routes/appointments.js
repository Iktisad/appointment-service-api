import express from 'express';
import { create, listAppointments } from '../controllers/PatientAppointmentsController.js';

const router = express.Router();

router.get('/all-appointment-list', listAppointments);
router.post('/create', create);
// router.patch();
// router.delete();

export default router;