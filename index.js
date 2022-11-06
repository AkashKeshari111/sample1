const express=require("express");
const  mongoose = require("mongoose");
const dotenv=require("dotenv").config()




const app=express();

const connect=mongoose.connect(process.env.MONGO_URL)

app.get("/",(req,res)=>{
    res.send("Home Page")
})

const PORT=process.env.PORT || 8080;
app.listen(PORT,async()=>{
    await connect;
    console.log("server connected")
    
})