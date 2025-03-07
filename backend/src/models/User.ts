import mongoose, { model } from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type:String,
    require:true,
    unique:true
    
  },
  password:{
    type:String,
    require:true

  }

})

export const UserModel=model("User",UserSchema);