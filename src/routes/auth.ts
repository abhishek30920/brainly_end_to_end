import express from 'express'
import { signup } from '../controllers/auth.controller'
import { signin } from '../controllers/auth.controller'

const router=express.Router()

router.post("/v1/signup", signup)
router.post("/v1/signin",signin)

export default router