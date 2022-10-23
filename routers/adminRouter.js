const express = require('express')
const router=express.Router()
const actions = require('../controller/adminController')
const auth=require('../middleware/auth')
const adminSchema=require('../validation/admin')
const validate=require('../middleware/validate')

router.post('/login',validate.checkValidation(adminSchema), actions.login )

module.exports=router
