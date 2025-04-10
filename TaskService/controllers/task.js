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

module.exports = {CreateTask};
