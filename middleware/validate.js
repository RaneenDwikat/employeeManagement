const express=require('express')

exports.checkValidation=(schema)=>{
    return async (req,res,next)=>{
        try {
            console.log('validate!')
            const validation=await schema.validate(req.body)
            req.body=validation            
            next()
        } catch (error) {
            console.log('not validate')
            return res.json({error:error})
        }
    }
}