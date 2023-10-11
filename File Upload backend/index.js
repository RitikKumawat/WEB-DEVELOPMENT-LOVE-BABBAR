const express = require("express");
//app create
const app = express();

//Port find krna h 
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware add krna h
app.use(express.json());
const fileupload = require('express-fileupload');
app.use(fileupload());

//db se connect 
const db = require("./config/database");
db.connect();

//cloud(cloudinary) se connect krna h
const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();

// api route mount krna h
const upload = require('./routes/FileUpload');
app.use('/api/v1/upload',upload);

//activate server
app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`);
})