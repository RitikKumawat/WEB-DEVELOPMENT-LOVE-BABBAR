//this file use to establish connection between application and database

const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log("Connection to Db Successful"))
    .catch((error)=>{
        console.log("Issue in connecting with db");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;