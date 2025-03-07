import mongoose, { model, mongo } from "mongoose";

const ContentSchema=new mongoose.Schema({
  type:{
    type:String,
    require:true,

    enum:['document',"tweet","youtube","link"]
  },
  link:{
    type:String,
    require:true

  },
  "title":{
    type:String,
    require:true
  },
  "tags":[{type:mongoose.Types.ObjectId,ref:'Tag'}],
  "userId":{type:mongoose.Types.ObjectId,ref:'User',require:true}
})

export const ContentModel=model("Content",ContentSchema)