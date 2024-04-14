import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected")
}).catch((err)=>{
console.log(err);
})

const app = express();

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})