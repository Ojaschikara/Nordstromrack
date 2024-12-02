const express = require("express");
const UserModel = require("../models/user.model");
const userRouter = express.Router();
const bcrypt = require("bcrypt")
const dotenv= require("dotenv").config();
const jwt = require("jsonwebtoken");

// userRouter.get("/",(req,res)=>{
//     res.status(201).json({
//         message:"userRouter is running"
//     })
// })
//registring new user
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
                firstName,
                lastName,
                password :hash
            })
            const token = jwt.sign({userId:user._id},process.env.SECRET_KEY,{expiresIn:"1d"});
            await user.save();
            res.status(201).json({
                message:` User Registered Successfully`,
                user,
                token
            })

        })

       
    } catch (error) {
        res.status(500).json({
            message:`Error in registration ${error}`
        })
    }
})
//user login
userRouter.post("/login",async(req,res)=>{
   const{email,password} = req.body;
   try {
    const user =await UserModel.findOne({email});
    console.log(user)
    if(!user){
        return res.status(404).json({message:"User not found"  })
    }
    if(user){
        bcrypt.compare(password,user.password,function(err,result){
          if(result){
            const token = jwt.sign({id : user._id}, process.env.SECRET_KEY,{expiresIn:"1d"});
            res.status(201).json({
                msg:`${user.firstName} login successfully`,
                token
            })
        
          }else{
            res.status(501).json({
                message:`Incorrect password${err}`
            })
          }

        })
       
    }
   } catch (error) {
    res.status(500).json({
        message:`Error in login ${error}`
    })
   }
})

//getting all users

userRouter.get("/",async(req,res)=>{
    try {
        const users = await UserModel.find();
        if(users.length==0){
           return res.status(200).json({
                message:`No users yet`
            })
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message:`Error  ${error}`
        })
    }
})

//getting user by id
userRouter.get("/:id",async(req,res)=>{
    try {
        const user = await UserModel.findById(req.params.id);
        if(!user){
            res.status(404).json({message:"User Not found"})
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message:`Error  ${error}`
        })
    }
})

//updating user
userRouter.put("/:id",async(req,res)=>{
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id,req.body);
        if(!user){
            res.status(404).json({message:"User Not found"})
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message:`Error  ${error}`
        })
    }
})

//deleting user
userRouter.delete("/:id",async(req,res)=>{
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if(!user){
          return  res.status(404).json({message:"User Not found"})
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message:`Error  ${error}`
        })
    }
})

module.exports = userRouter