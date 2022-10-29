
import rateLimiter from "express-rate-limit"
 
// export const limiter = rateLimiter({
//     max: 10,
//     windowMs:10000,
//     message: "You can't make any more requests at the moment. Try again later",
// });
 




import {redis} from '../utils/redis/connectRedis'


import { NextFunction,Request,Response } from 'express'


 export const  limiter=async(req:Request,res:Response,next:NextFunction)=>{
            const requests= await redis.incr(req.ip)
            if(requests ===1){
                await redis.expire(req.ip,60)
            }
            if(requests>5){
                return res.status(501).json({msg:"You can't make any more requests at the moment. Try again later"})
            }else{
                next()
            }
        }


