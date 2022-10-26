import  { NextFunction, Request,Response } from 'express';
import {redis} from '../utils/redis/connectRedis'

export const getFromCache = async(req:Request,res:Response,next:NextFunction)=>{
    const { _id } = req.params;

    try {
        const user=await redis.GET(`task_?${_id}`)
    if(user){
        return res.status(200).json(JSON.parse(user))
    }
    next()
    } catch (error) {
        return res.status(500).json({status:false,error:"error"})
    }
}