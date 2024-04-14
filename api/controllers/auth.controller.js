import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    const{username, email, password} = req.body;

    if(!username || !email || !password){
        return res.status(400).json({message: "All fields are required"});
    }
    const hashPassword = bcryptjs.hashSync(password, 10);
    try {
        const newUser = new User({username, email, password: hashPassword});
        await newUser.save();
        res.status(201).json({message: "User created successfully"});
        
    } catch (error) {
        return res.status(400).json({message: "All fields are required"});
    }
   
        
    }
