const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require("dotenv").config();
const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,

    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
});


//jaise db me entry ho ek mail send ho
//post middleware
fileSchema.post("save",async function(doc){
    try {
        console.log("Doc:",doc); //Doc = entry which is created in compassMongo
        //transporter
        let transporter = nodemailer.createTransport ({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
        })

        //send mail 
        
        let info = await transporter.sendMail({
            from:'Ritik Kumawat',
            to:doc.email,
            subject:"New file uploaded on Cloudinary",
            html:`<h2>Hello ji</h2><p>File Upload Ho gyi View here:<a href="${doc.imageUrl}">${doc.imageUrl}</a></p>`,
        })

        console.log("INFO:",info);

    } catch (error) {
        console.log(error);
        
    }
})

const File = mongoose.model("File",fileSchema);
module.exports = File;