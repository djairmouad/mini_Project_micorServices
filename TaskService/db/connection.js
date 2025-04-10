const mysql=require("mysql2");


const connection=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"Todo_tasks"
})

module.exports=connection;