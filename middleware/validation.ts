import {Request,Response,NextFunction} from 'express'


export const checkValidation= (schema:any)=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const validation=await schema.validate(req.body)
            req.body=validation 
            console.log("validation")           
            next()
        } catch (error) {
            console.log('not validate')
            return res.json({error:error})
        }
    }
}