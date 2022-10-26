import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {connectDB} from './utils/mongo/connectDB'
import config from './config/config.config'
import {userRouter} from './routers/userRouter'
import {taskRouter} from './routers/taskRouter'
import {adminRouter} from './routers/adminRouter'
import { connectRedis } from './utils/redis/connectRedis'

connectDB()
connectRedis()
const app=express()

if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"))
}


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/v1/user/", userRouter);
app.use("/api/v1/task/", taskRouter);
app.use("/api/v1/admin/", adminRouter);

const port= config.port

app.listen(port,():void=>{
    console.log(`server running on port = ${port}`)
})

