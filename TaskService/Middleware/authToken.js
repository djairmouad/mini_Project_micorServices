
const userClient=require("../grpc_functions/userClient")

const authToken=(req,res,next)=>{
    const authHeader=req.headers["authorization"];
    if(!authHeader){
        return res.status(401).json({success:false,message:"No Token provided"})
    }
    const token=authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(400).json({success:false,message:"No token provided"})
    }
    userClient.VerifyToken({ token }, (err, response) => {
        if(err){
            return res.status(401).json({ message: err});
        }
        if (err || !response.isValid) {
          return res.status(401).json({ message: "Invalid Token that maybe cause there is no user with this token"});
        }
        req.user = {
          id: response.id,
        };
    
        next();
      });
}

module.exports={authToken}