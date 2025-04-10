const express=require("express");

const router=express.Router();

const {SignUp,SignIn}=require("../controllers/user");

router.route("/Create").post(SignUp)
router.route("/SignIn").post(SignIn)

module.exports=router;
