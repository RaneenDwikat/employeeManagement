import jwt from 'jsonwebtoken'
import admins from '../model/admin'
import { Request,Response,NextFunction } from 'express'

interface JwtPayload {
    _id: string
  }

 export default   async function auth (req:Request, res:Response, next:NextFunction) {
    try {
      const token = req.headers.authorization?.replace("Bearer ","")
      if(token){
        const decoded :JwtPayload = jwt.verify(token,'secret') as  JwtPayload 
    
        if(decoded){
            const user= await admins.findOne({_id:decoded._id})
            if(user){
            req.body=user
            next()
            }
            return res.status(401).json({error:"Not Authenticated!"})
          }
      }
     
     
    } catch (error) {
      return res.status(401).json({error:error})
    }
  }
  
