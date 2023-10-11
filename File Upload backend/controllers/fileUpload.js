const File = require('../models/File');

//local file upload =>handler function

exports.localfileUpload = async (req,res)=>{
    try {
        //fetch file
        const file = req.files.file;
        console.log("file :",file);
        // __dirname represents current directory which in our case is /controllers
        let path = __dirname +"/files/"+Date.now()+`.${file.name.split('.')[1]}`; //here we are adding extension jpg or png by split method 
        console.log("Path: ",path);
        file.mv(path,(err)=>{
            console.log(err);
        });
        res.json({
            succsess:true,
            message:"Local file uploaded succesffully",
        })
    } catch (error) {
        console.log(error);
    }
}