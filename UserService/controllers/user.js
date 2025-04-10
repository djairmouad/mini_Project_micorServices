const db = require("../db/db");
const jwt=require("jsonwebtoken")
const secretKey=process.env.privatekey
const SignUp = (req, res) => {
  const { name, email,password } = req.body;

  if (!name) {
    return res.status(400).json({ success: false, message: "You forgot to provide the name." });
  }

  if (!email) {
    return res.status(400).json({ success: false, message: "You forgot to provide the email." });
  }
  if (!password || password.length<8) {
    return res.status(400).json({ success: false, message: "You forgot to provide the password or your password is less then 8 caractere ." });
  }

  db.getDb()
    .collection("users")
    .insertOne({ name, email,password })
    .then(() => {
      return res.status(200).json({ success: true, message: "You have signed up successfully!" });
    })
    .catch((err) => {
      console.error("Error inserting user:", err);
      return res.status(500).json({ success: false, message: "Internal server error." });
    });
};


const SignIn=(req,res)=>{
  const {email,password}=req.body;
  
  if (!password) {
    return res.status(400).json({ success: false, message: "You forgot to provide the password." });
  }

  if (!email) {
    return res.status(400).json({ success: false, message: "You forgot to provide the email." });
  }

  db.getDb().collection("users").findOne({email,password}).then((result)=>{
  if(result.length<=0){
    return res.status(400).json({success:false,message:" THIS ACCOUNT NOT EXIST"})
  }
  const payload={email,id:result._id}
  const token=jwt.sign(payload, secretKey, { expiresIn:"1h" });
  return res.status(200).json({success:true,data:result,token})
  }).catch(err=>{
    console.log(err)
    return res.status(500).json({success:false,message:err})
  })
}
module.exports = { SignUp, SignIn };
