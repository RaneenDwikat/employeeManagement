const express=require('express')
const bodyPurser=require('body-parser')
const morgan=require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')
const urls = require("./routers/router")

connectDB()

const app=express()

if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"))
}

app.use(cors())
app.use(bodyPurser.json())
app.use(bodyPurser.urlencoded({extended:false}))
app.use(urls)

const port= process.env.PORT || 3000

app.listen(port,console.log(`server running on port = ${port}`))