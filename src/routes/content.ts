import express from 'express'

import { userMiddleware } from '../utils/middleware'
import { AddContent, getContent } from '../controllers/Content.controller'

const router=express.Router()

router.post("/add",userMiddleware,AddContent)
router.get("/get",userMiddleware,getContent)

export default router