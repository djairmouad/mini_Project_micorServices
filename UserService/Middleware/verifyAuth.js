const jwt=require("jsonwebtoken")
require("dotenv").config()
const privateKey=process.env.privateKey

function authJWT(req,res,next){
    const authHeader=req.headers["authorization"];
    const token=authHeader && authHeader.split(" ")[1]
    if(!token){
        return res.status(400).json({success:true,message:" Invalid Token"})
    }
    jwt.verify(token,privateKey,(err,decoded)=>{
        if(err){
            return res.status(403)
        }
        req.user=decoded;
        next();
    })
}

module.exports={authJWT}