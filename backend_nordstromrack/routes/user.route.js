const express = require("express");
const UserModel = require("../models/user.model");
const userRouter = express.Router();
const bcrypt = express("bcrypt").config();


userRouter.get("/",(req,res)=>{
    res.status(201).json({
        message:"userRouter is running"
    })
})

userRouter.post("/registration",(req,res)=>{
    const{email,firstName,lastName,password} = req.body;
    try {
        bcrypt.hash(password,2,async(err,hash)=>{
            if(err){
                res.status(501).json({
                    message:`Error in password h ashing ${err}`
                })
            }
            const user = new UserModel({
                email,
                userName:firstName+ " "+ lastName,
                password :hash
            })
            await user.save();
            res.status(201).json({
                message:` User Registered Successfully`
            })

        })

       
    } catch (error) {
        res.status(501).json({
            message:`Error in registration ${error}`
        })
    }
})

userRouter.post("/login",(req,res)=>{
   const{email,password} = req.body;
   try {
    
   } catch (error) {
    res.status(501).json({
        message:`Error in login ${error}`
    })
   }
})
