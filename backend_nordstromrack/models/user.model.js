const { text } = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{type:String, required:true},
    firstName:{type:Text, required:true},
    lastName:{type:Text, required:true},
    password:{type:String, required:true},
})

const UserModel = mongoose.Model("User",userSchema);

module.exports = UserModel