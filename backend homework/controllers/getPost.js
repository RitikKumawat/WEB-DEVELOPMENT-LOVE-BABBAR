const Blog = require('../models/schema_blog');

exports.getPost = async(req,res)=>{
    try {
        const {title,body} = req.body;
        const post = new Blog({
            title,body,
        });
        const savedPost = await post.save();

        res.status(200).json({
            post:savedPost,
        });
    } catch (err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err,
            message:"Server Error",
        });
    }
};


exports.getAllPosts = async (req,res)=>{
    try {
        const posts = await Blog.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        })
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
