const express=require('express')
const morgan=require('morgan')
const cors = require('cors')
const connectDB = require('./utils/mongo/connectDB')
const urlsUsers = require("./routers/userRouter")
const urlsTasks = require("./routers/taskRouter")
const urlsAdmins = require("./routers/adminRouter")

connectDB()

const app=express()

if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"))
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/v1/user/", urlsUsers);
app.use("/api/v1/task/", urlsTasks);
app.use("/api/v1/admin/", urlsAdmins);

const port= process.env.PORT

app.listen(port,console.log(`server running on port = ${port}`))

