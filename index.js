const express=require('express');
const mongo=require("./shared");
const hallBookingRouter=require('./router/rooms');
//const dotenv=require('dotenv');

//dotenv.config();
var app=express();


app.use(express.json());

mongo.connect();



app.use('/',(req,res,next)=>{
    next();
})

app.use('/hallBooking',hallBookingRouter);

app.listen('3001');