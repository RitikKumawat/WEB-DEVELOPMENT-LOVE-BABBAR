const Post = require('../models/schema_blog');
const Like = require('../models/likeModel');

exports.likepost = async (req,res)=>{
    try {
        const {post,user} = req.body;
        const like = new Like({
            post,user,
        });
        const savedLike = await like.save();

        const updatePost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
                            .populate("likes").exec();

        res.json({
            post:updatePost,
        });
    } catch (error) {
        console.error(error);
        res.status(500)
        .json({
            success:false,
            error:err,
            message:"Server Error",
        });
    }
}

//unlike post 
exports.unlikePost =async (req,res)=>{
    try {
        const {post,like} = req.body;
        //find and delete the like collection
        const deleteLike = await Like.findOneAndDelete({post:post,_id:like});

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deleteLike._id}},{new:true});

        res.json({
            post:updatedPost,
        });

    } catch (error) {
        console.error(error);
        res.status(500)
        .json({
            success:false,
            error:error,
            message:"Server Error",
        });
    }
}