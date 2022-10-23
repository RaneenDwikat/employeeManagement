const Task = require("../models/task");
const Users = require("../models/user");
const res = require("express/lib/response");
const Admins=require('../models/admin')
const jwt=require('jsonwebtoken')
exports.login=async(req,res,next)=>{
  const{email,password}=req.body
  try {
    const user=await Admins.findOne({email:email,password:password})
    token=jwt.sign({"_id":user._id},'secret')
    console.log(token)
    return res.status(200).json({ success: true, msg: "Authenticated" });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
}

