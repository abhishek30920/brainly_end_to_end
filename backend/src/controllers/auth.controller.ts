import { UserModel } from "../models/User";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from "../lib/jwt";
 const signup = async (req:any,res:any) => {
 try{
   const username = req.body.username;
   const password = req.body.password;


   const userexist=await UserModel.findOne({
    username:username
   })
   if(userexist){
      return res.json({msg:"User already exist"})
   }

    await UserModel.create({
      username: username,
      password: password
    })

   return res.json({message:"user signed up"} )
  }
  catch(error){
    return res.status(400).json({msg:error})
  }
}

const signin=async(req:any,res:any)=>{
  const username = req.body.username;
  const password = req.body.password;

  const userexist=await UserModel.findOne({
    username,
    password
   })
   
   if(userexist){
    const token=jwt.sign({
      id:userexist._id

    },SECRET_KEY)
    res.json({
      token:token
    })
   }else{
    res.status(403).json({
      message:"inccorrect credientials"    
    })
   }

}
export { signin, signup };