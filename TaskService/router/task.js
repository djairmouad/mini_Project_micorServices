const express=require("express");

const router=express.Router();

const {CreateTask,FetchAllTasks,DeleteTask,DeleteAllTasks,UpdateTask}=require("../controllers/task")
router.route("/CreateTask").post(CreateTask)

router.route("/FetchAllTasks").get(FetchAllTasks)

router.route("/DeleteTask/:id").delete(DeleteTask)

router.route("/UpdateTask/:id").put(UpdateTask)

router.route("/DeleteAllTasks").delete(DeleteAllTasks)
module.exports=router;


//api 
//http://localhost:3001/api/task/CreateTask
// {
//     "name": "first task",
//     "desc":"first task 123444555",
//     "type":"Start"
//  }

//http://localhost:3001/api/task/FetchAllTasks


//http://localhost:3001/api/task/DeleteTask

//http://localhost:3001/api/task/DeleteAllTasks