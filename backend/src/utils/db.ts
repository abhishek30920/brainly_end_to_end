import mongoose from "mongoose";



 const startDb=async()=>{
  try{
    await  mongoose.connect("mongodb://127.0.0.1:27017/brainly")
    console.log("connected to db")
  }
  catch(error){
    console.log(error)
  }
}
export default startDb
