const express=require("express");

const router=express.Router();

const {CreateTask,FetchAllTasks,DeleteTask,DeleteAllTasks}=require("../controllers/task")
router.route("/CreateTask").post(CreateTask)

router.route("/FetchAllTasks").get(FetchAllTasks)

router.route("/DeleteTask").delete(DeleteTask)

router.route("/DeleteAllTasks").delete(DeleteAllTasks)
module.exports=router;


//api 
//http://localhost:3001/api/task/CreateTask
// {
//     "name": "first task",
//     "desc":"first task 123444555"
//  }

//http://localhost:3001/api/task/FetchAllTasks


//http://localhost:3001/api/task/DeleteTask

//http://localhost:3001/api/task/DeleteAllTasks