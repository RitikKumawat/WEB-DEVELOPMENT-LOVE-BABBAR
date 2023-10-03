const Todo  = require('../models/toDo');

exports.deleteTodo = async(req,res)=>{
    try {
       const {id}  = req.params;
       
       await Todo.findByIdAndDelete(id);
       res.status(200).json({
        success:true,
        message:"Todo Deleted",
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