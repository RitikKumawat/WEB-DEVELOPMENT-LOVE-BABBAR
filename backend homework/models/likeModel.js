const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        reference:"blogSchema", // reference to the post model or schema_blog
    },
    user:{
        type:String,
        required:true,
    },
   
});

module.exports = mongoose.model("Like",likeSchema);
