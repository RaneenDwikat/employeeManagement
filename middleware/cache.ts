import  { NextFunction, Request,Response } from 'express';
import {redis} from '../utils/redis/connectRedis'

export const getAndSetCache = async(req:Request,res:Response,next:NextFunction,key:string,value:string|null,expire:number|null)=>{

    try {
        if(value==null || expire==null){
            const user=await redis.GET(key)
            if(user){
                return res.status(200).json(JSON.parse(user))
            } 
        }else{
            const user=await redis.setEx(key,expire,value) 
            next()
        }
       
    } catch (error) {
        return error
    }
}