const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const dotenv = require("dotenv").config();

const auth = (req,res,next)=>{
    if(!req.headers.authorization){
        res.status(401).json({
            message:"Token not found "
        })
    }
    //Hi, My self Ojas Chikara 

   const token = req.headers.authorization.split(" ")[1]
 if(token){
    try {
       
        jwt.verify(token, process.env.SECRET_KEY, async(err, decoded) => {
            if (err){
                res.send("please login first")
            } 
           if(decoded){
               const userId = decoded.id;
               const user =await UserModel.findById(userId); 
            //    if(!user){
                 
            //    }
               req.user = user;
            next();
           } 
            
          });
    } catch (error) {
        res.status(401).json({
            message:"Invalid token"
        })
    }
}


}

module.exports = auth