const jwt=require('jsonwebtoken')
const admins=require('../models/admin')
 exports.auth =  async function (req, res, next) {
    try {
      const token = req.header("authorization").replace('Bearer ','')
      const decoded=jwt.verify(token,'secret')
      const user= await admins.findOne({_id:decoded._id})
      if(!user){
        return res.status(401).json({error:error})
      }
      req.user=user
      next()
    } catch (error) {
      return res.status(401).json({error:error})
    }
  }
  
