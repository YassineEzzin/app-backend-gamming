const express = require('express');
const dotenv=require('dotenv');
const authRoutes = require('./routes/authRoutes')
const helmt = require('helmet');
const cors = require('cors');
const connectDB = require('./config/db');


dotenv.config();
connectDB();
app=express();
app.use (express.json());
app.use('/api/auth',authRoutes)
app.use(cors());
module.exports = app;