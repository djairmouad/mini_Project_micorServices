const express=require("express")
const cors=require("cors")
const db=require("./db/db")
require("dotenv").config()
const app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(express.static("public"))

const user=require("./router/user");

app.use("/api/user",user)


const port=process.env.port;
db.initDb((err,dataBase)=>{
    if(err){
        return err
    }else{
        app.listen(port,()=>{
            console.log("User Server is Running on Port:"+port)
        })
    }
})


