const express = require("express");
const connection = require("./config/db");
const server = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;

server.use(express.json());
server.get("/",(req,res)=>{
    res.send("Server is running")
})


server.listen(PORT,async(req,res)=>{
    try {
        await connection;
        console.log(`server connecion successfull at PORT ${PORT}`)
    } catch (error) {
       console.log(`Server connection error${error}`)
        
    }
})