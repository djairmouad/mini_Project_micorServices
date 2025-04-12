const express=require("express");

const router=express.Router();

const {SignUp,SignIn}=require("../controllers/user");

router.route("/Create").post(SignUp)
router.route("/SignIn").post(SignIn)


//http://localhost:3000/api/user/Create
//{ name, email,password }

//http://localhost:3000/api/user/SignIn
//{email,password}
module.exports=router;
