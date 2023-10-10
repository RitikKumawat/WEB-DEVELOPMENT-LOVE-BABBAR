const express = require("express");
const router = express.Router();

const{login, signup} = require("../controllers/Auth");
const{auth,isStudent,isAdmin} = require("../middleware/auth");

router.post("/login",login);
router.post("/signup",signup);


//Testing middleware 
router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for Tests",
    });
})
//Protected Route == only authorized can see this routes 
//such as admin can see his/her admin dashboard
//and student can see their student dashboard
router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for Students",
    });
})

router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for Admin",
    });
})


module.exports = router;