const mysql=require("mysql2");


const connection=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"Todo_tasks"
})

//host:"localhost"
//host:"host.docker.internal"
module.exports=connection;