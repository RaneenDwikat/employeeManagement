
import rateLimiter from "express-rate-limit"
 
export const limiter = rateLimiter({
    max: 10,
    windowMs:10000,
    message: "You can't make any more requests at the moment. Try again later",
});
 






// import { NextFunction,Request,Response } from 'express'

// export class rateLimitter{
//     max:number
//     tokens:number
//     buckets: Map<string, number>=new Map()

//     constructor(max:number){

//         this.max=max
//         this.tokens=max
//     }
//      limitRequests=async(req:Request,res:Response,next:NextFunction)=>{
//             if(!this.buckets.has(req.ip)){
//                 this.buckets.set(req.ip,this.max)
//                 console.log(this.buckets)

//             }else{
//                  let s=this.buckets.get(req.ip)
//               if(s!<this.max){
//                 console.log(s)

//                     this.buckets.set(req.ip,s!--)
//               }
//             }
//         next()
//         }
// }

