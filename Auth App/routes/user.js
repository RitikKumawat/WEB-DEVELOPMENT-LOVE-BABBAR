const express = require("express");
const router = express.Router();

const{login, signup} = require("../controllers/Auth");
const{auth,isStudent,isAdmin} = require("../middleware/auth");
const User = require("../models/User");

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

// router.get("/getEmail",auth,async (req,res)=>{
//     try {
//         const id = req.user.id;
//         const user = await User.findById({id});
//         res.status(200).json({
//             success:true,
//             id:id,
//             message:"Welcome to the email route",
//         })
//     } catch (error) {
//         res.status(500).json({
//             success:false,
//             error:error.message,
//             message:"Some thing is wrong here", 

//         })  
//     }
//     console.log("Id: ",id);
//     res.json({
//         success:true,
//         message:"Welcome to the email Route",
//         })
// })

module.exports = router;