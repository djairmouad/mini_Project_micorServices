const mysql=require("mysql2");


const connection=mysql.createPool({
    host:"host.docker.internal",
    user:"root",
    password:"",
    database:"Todo_tasks"
})

//host:"localhost"
module.exports=connection;