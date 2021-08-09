import express from 'express';
import {resourceRoute, 
        patientAppointmentsRoute,
        doctorAppointmentRoute
    } from './routes/router-index.js';
// import appointmentRoutes from './routes/appointments.js';
import mongoose from 'mongoose';
import {} from 'dotenv/config';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route middleware
app.use('/api/resources', resourceRoute);
app.use('/api/appointments', patientAppointmentsRoute);
app.use('/api/appointment-doctor', doctorAppointmentRoute);
// routes(app);
// routes

// testing route
app.get('/', (req, res)=>{
    res.send('Iktisad is a b****');
    console.log('Yay');
});

// setting up connection to database
mongoose.connect(process.env.CONNECTION_STRING.replace('<DBPORT>', process.env.DBPORT).replace('<DBNAME>',process.env.DBNAME),
{
    useNewUrlParser:true, 
    useUnifiedTopology:true,
    useFindAndModify: false,
    useCreateIndex: true
},

() => {
    console.log("Connected to DB");
});

app.listen(process.env.PORT, ()=> console.log(`Running On Port http://localhost:${process.env.PORT}`));