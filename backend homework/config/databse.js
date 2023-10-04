const mongoose = require('mongoose');

require('dotenv').config();  

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then( ()=>console.log("Connection to Db successful"))
    .catch((error)=>{
        console.log("Issue in connecting to db")
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;