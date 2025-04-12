const connection = require("../db/connection");

const CreateTask = (req, res) => {
  const { name, desc } = req.body;
  const id = req.user.id;

  if (!name || !desc) {
    return res.status(400).json({ success: false, message: "Name and description are required" });
  }

  const sql = "INSERT INTO task (nameTask, description, id_user) VALUES (?, ?, ?)";
  const values = [name, desc, id];

  connection.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
    return res.status(201).json({ success: true, message: "Task created", taskId: data.insertId });
  });
};


const FetchAllTasks=(req,res)=>{
  const id=req.user.id;
  const sql="SELECT * FROM task WHERE id_user=?"
  const values=[id]
  connection.query(sql,values,(err,data)=>{
    if(err){
      return res.status(500).json({success:false,message:err})
    }
    return res.status(200).json({success:true,data:data})
  })
}

const DeleteTask=()=>{
  const idTask=req.id
  const id=req.user.id
  const sql="DELETE FROM task WHERE id=? AND id_user=? "
  const values=[idTask,id]
  connection.query(sql,values,(err,data)=>{
    if(err){
      return res.status(500).json({success:false,message:err})
    }
    return res.status(200).json({success:true,message:"THE TASK HAS BEEN DELETED"})
  })
}

const DeleteAllTasks=()=>{
  const id=req.user.id;
  const sql="DELETE FROM task where id_user=?"
  const values=[id]
  connection.query(sql,values,(err,data)=>{
    if(err){
      return res.status(500).json({success:false,message:err})
    }
    return res.status(200).json({success:true,message:"ALL TASKS HAS BEEN DELETED SUCCESSFULLY"})
  })
}

module.exports = {CreateTask,FetchAllTasks,DeleteTask,DeleteAllTasks};
