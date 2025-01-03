const { text } = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{type:String, required:true},
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    password:{type:String, required:true},
},{
    timestamps:true,
    versionKey:false
})

const UserModel = mongoose.model("User",userSchema);

module.exports = UserModel