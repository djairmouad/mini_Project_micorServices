const express=require("express")
const app=express();
const cors=require("cors");
require("dotenv").config();
const task=require("./router/task");
const {authToken}=require("./Middleware/authToken")
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.use("/api/task",authToken,task);
const port=process.env.port;
app.listen(port,()=>{
    console.log("the Task server run on Port:"+port)
})