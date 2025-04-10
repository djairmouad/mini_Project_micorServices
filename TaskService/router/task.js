const express=require("express");

const router=express.Router();

const {CreateTask}=require("../controllers/task")
router.route("/CreateTask").post(CreateTask)

module.exports=router;