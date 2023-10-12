const File = require('../models/File');
const cloudinary = require("cloudinary").v2;
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
        console.log("Not able to upload the file on server");
        console.log(error);
    }
}


function isFileTypeSupported(type,supportedTypes){
    return supportedTypes.includes(type);
}
async function uploadFileToCloudinary(file,folder,quality){
    const options = {folder};
    console.log("Temp file path",file.tempFilePath);
    if(quality){
        options.quality = quality;
    }
    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath,options);

}
//image upload handler
exports.imageUpload = async (req,res)=>{
    try {
        //data fetch
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile; //imageFile represents key
        console.log(file);

        //validation
        const supportedTypes = ["jpg","jpeg","png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        
        //if file not supported
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"File format not supported",
            });
        }

        //file format is supported
        console.log("UPloading to codehelp");
        const response  = await uploadFileToCloudinary(file,"Codehelp");
        console.log(response);

        // save entry in db
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image Successfully uploaded",
        });


    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:"Something went wrrong"
        })

    }
}

//video upload handler
exports.videoUpload = async (req,res)=>{
    try {
        const{name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.videoFile;

        //Validation
        const supportedTypes = ["mp4","mov"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("file type:",fileType);

        //TODO: add a upper limit of 5MB for video
        if((file.size/1024/1024).toFixed(2)>5){
            return res.status(400).json({
                success:false,
                message:"File greater than 5MB",
            })
        }
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"File format is not supported",
            })
        }

        //file format supported hai
        console.log("Uploading to Codehelp");
        const response = await uploadFileToCloudinary(file,"Codehelp");
        console.log(response);

        //DB me entry
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Video Successfully uploaded",
        });
         

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:"Something went wrong",
        })
    }
}

exports.imageSizeReducer = async (req,res)=>{
    try {
        //data fetch
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile; //imageFile represents key
        console.log(file);

        //validation
        const supportedTypes = ["jpg","jpeg","png"];
        const fileType = file.name.split('.')[1].toLowerCase();


        //checking whether the file size is greater than 5MB
        if((file.size/1024/1024).toFixed(2)>5){
            return res.status(400).json({
                success:false,
                message:"File greater than 5MB",
            })
        }
        
        //if file not supported
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"File format not supported",
            });
        }

        //file format is supported
        console.log("UPloading to codehelp");
        const response  = await uploadFileToCloudinary(file,"Codehelp",30);
        console.log(response);

        // save entry in db
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image Successfully uploaded",
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:"Something went wrong",
        })
    }
}
