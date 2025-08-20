import User from "../models/userModel/userModel.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req,res)=>{
    const{name,email,password} = req.body;
    const hashedPassword = await bcryptjs.hash(password,10)
    try {
        const user = new User({name,email,password:hashedPassword});
        await user.save();
        res.status(201).json({message:'Registered user successfully!'})
        
    } catch (error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
    
}