const connection = require("../db/connection");

const CreateTask = (req, res) => {
  const { name, desc,type } = req.body;
  const id = req.user.id;

  if (!name || !desc || !type) {
    return res.status(400).json({ success: false, message: "Name and description and Type are required" });
  }

  const sql = "INSERT INTO task (nameTask, description, type,id_user) VALUES (?, ?,?, ?)";
  const values = [name, desc, type,id];

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
    const newData=["Start", "Progress", "Completed"].map((item)=>{
      return {
        type:item,
        children:data.filter((element)=>{
         return element.type===item
        }).map((task)=>{
          return {
            id:task.id,
            name:task.nameTask,
            desc:task.description
          }
        })
      }
    })
    return res.status(200).json({success:true,data:newData})
  })
}

const DeleteTask = (req, res) => {
  const idTask = req.params.id;
  const id = req.user.id; // Assuming you have some auth middleware setting this

  const sql = "DELETE FROM task WHERE id = ? AND id_user = ?";
  const values = [idTask, id];

  connection.query(sql, values, (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, message: err });
    }

    if (data.affectedRows === 0) {
      return res.status(404).json({ success: false, message: "Task not found or unauthorized" });
    }

    return res.status(200).json({ success: true, message: "THE TASK HAS BEEN DELETED" });
  });
};

const UpdateTask = (req, res) => {
  const idTask = req.params.id;
  const id = req.user.id; 
  const { name, desc, type } = req.body;

  const sql = "UPDATE `task` SET nameTask=?, description=?, type=? WHERE id_user=? AND id=?";
  const values = [name, desc, type, id, idTask];

  connection.query(sql, values, (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, message: err });
    }

    if (data.affectedRows === 0) {
      return res.status(404).json({ success: false, message: "Task not found or unauthorized" });
    }

    return res.status(200).json({ success: true, message: "Task has been updated successfully" });
  });
};


const DeleteAllTasks=(req,res)=>{
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

module.exports = {CreateTask,FetchAllTasks,DeleteTask,DeleteAllTasks,UpdateTask};
