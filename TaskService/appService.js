const express=require("express")
const app=express();
const cors=require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

const port=process.env.port;
app.listen(port,()=>{
    console.log("the Task server run on Port:"+port)
})