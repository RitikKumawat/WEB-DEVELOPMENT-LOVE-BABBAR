const Todo = require('../models/toDo');

exports.getTodo = async(req,res) =>{
    try{
        //fetch all todo items from database
        const todos = await Todo.find({});

        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched",
        });
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err,
            message:"Server Error",
        });
    }
}

exports.getTodoById = async (req,res)=>{
    try {
        //extract todo item basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        // data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with given id",
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fethced`,
        })
    } catch (err) {
            console.error(err);
            res.status(500)
            .json({
                success:false,
                error:err,
                message:"Server Error",
            });

    }
}