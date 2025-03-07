import express from 'express'
import startDb from './utils/db'
import authroute from "./routes/auth"
import { configDotenv } from 'dotenv'
import contentRoute from './routes/content'
const app= express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const PORT=process.env.port || 3000

app.use("/auth",authroute)
app.use("/content",contentRoute)
configDotenv()

app.listen(PORT ,()=>{
  startDb()
  console.log("server is listneing to port",PORT )
})


