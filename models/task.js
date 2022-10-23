const mongoose = require("mongoose")
const taskValidator=require('../validation/task')


const taskSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum:['cancelled','completed','pending']
    },
    owner:{
        type:mongoose.ObjectId,
        ref:"users",
    }
},{timestamps:true})




module.exports=mongoose.model('Tasks',taskSchema)