const mongoose=require('mongoose')
const adminValidator=require('../validation/admin')
const yup=require('yup')
const { jwt } = require('jsonwebtoken')
const adminSchema=new mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:String,

    },
   
},{timestamps:true})



module.exports=mongoose.model("admins",adminSchema)
