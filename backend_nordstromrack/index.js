const express = require("express");
const connection = require("./config/db");
const userRouter = require("./routes/user.route");
const cartRouter = require("./routes/cartPage.route");
const auth = require("./middlewares/auth.middleware");
const productRouter = require("./routes/products.route");
const server = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT;

server.use(express.json());
server.use(cors({
    origin: '*',credentials: true, 
  }));


server.get("/",(req,res)=>{
    res.send("Server is running")
})
server.use("/user",userRouter);
server.use("/cart",auth,cartRouter);
server.use("/product",productRouter)

server.listen(PORT,async(req,res)=>{
    try {
        await connection;
        console.log(`server connecion successfull at PORT ${PORT}`)
    } catch (error) {
       console.log(`Server connection error${error}`)
        
    }
})

