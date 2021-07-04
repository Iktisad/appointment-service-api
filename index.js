import express from 'express';
import usersRoutes from './routes/users.js';
import mongoose from 'mongoose';
import {} from 'dotenv/config';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route middleware
app.use('/users', usersRoutes);
// routes

app.get('/', (req, res)=>{
    res.send('Yo I m active');
    console.log('Yay');
});
mongoose.connect(process.env.CONNECTION_STRING.replace('<DBPORT>', process.env.DBPORT),
{
    useNewUrlParser:true, 
    useUnifiedTopology:true,
    useFindAndModify: false
}, 
    () => {
    console.log("Connected to DB");
});

app.listen(process.env.PORT, ()=> console.log(`Running On Port http://localhost:${process.env.PORT}`));
