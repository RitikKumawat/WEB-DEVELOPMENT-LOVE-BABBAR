const express  = require("express");

const router  = express.Router();

//Import controller
const {getPost,getAllPosts} = require('../controllers/getPost');
const {createComment} =require('../controllers/commentController');
const {likepost,unlikePost} = require('../controllers/likePostController');


//Create Mapping
router.post("/posts/create",getPost);
router.post("/comments/create",createComment);
router.get("/posts",getAllPosts);
router.post("/likes/like",likepost);
router.post("/likes/unlike",unlikePost);

//export 
module.exports = router;