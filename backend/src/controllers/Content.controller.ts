import { ContentModel } from "../models/Content";
import { Request, Response } from "express";


const AddContent = async (req: Request, res: Response): Promise<void> => {
  try {
      const { link, type } = req.body;
        //@ts-ignore
console.log(req.userId)
      await ContentModel.create({
          link,
          type,
          //@ts-ignore
          userId: req.userId,
          tags: []
      });

      res.json({ message: "content done" }); // Just send the response, no return needed
  } catch (error) {
    console.log(error)
      res.status(500).json({ error: "Internal Server Error" });
  }
};


const getContent= async (req: Request, res: Response): Promise<void> => {
  try {
    //@ts-ignore
    const userId=req.userId
    const content=await ContentModel.find({
      userId:userId
    }).populate("userId","username")
    res.json({
      content
    })
  }catch(error){
    res.json({msg:error})
  }
}
export {getContent,AddContent}