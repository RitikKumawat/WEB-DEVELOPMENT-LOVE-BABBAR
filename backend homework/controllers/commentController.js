const Post = require('../models/schema_blog');
const Comment =require('../models/commentModel');

exports.createComment = async (req,res)=>{
    try {
        const {post,user,body} = req.body;

        const comment = new Comment({
            post,user,body
        });

        const savedComment = await comment.save(); //inserting comment

        //find the post by id add the new comment to ite comments array
        const updatePost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new: true})
                            .populate("comments")
                            .exec();
        res.json({
            post:updatePost,
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