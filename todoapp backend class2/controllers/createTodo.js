//import the model

const toDo = require("../models/toDo");

//define route handler

exports.createTodo = async(req,res) =>{
    try{
        //extract title and description from request body
        const {title,description} = req.body;

        //create a new todo obj and insert in DB
        const response = await toDo.create({title,description});

        //send a json response with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created successfully",
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}