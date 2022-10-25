import users from '../model/user';
import admins from '../model/admin'
import  { NextFunction, Request,Response } from 'express';
import jwt from 'jsonwebtoken'


export default class adminsController{
    login=async(req:Request,res:Response,next:NextFunction)=>{
        const{email,password}=req.body
        try {
          const user=await admins.findOne({email:email,password:password})
          if(!user)
         {
           return res.status(400).json({ success: false, msg: "something went wrong" });
         }else{
          let  token=jwt.sign({"_id":user._id},'secret')
          return res.status(200).json({ success: true,token:token, msg: "Authenticated", });
         }
        } catch (error) {
          // return res.status(500).json({ success: false, msg: error });
        }
      }
}

