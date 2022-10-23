const express = require('express')
const router=express.Router()
const actions = require('../controller/userController')
const yupMiddleware=require('../middleware/auth')
const auth=require('../middleware/auth')
//add new user
// router.post('/add', verifyToken, yupMiddleware(userSchema), actions.adduser )
router.post('/add',auth.auth, actions.addUser )
//update user
router.put('/update/:_id',actions.updateUser)
//delete user
// router.delete('/delete/:_id', verifyToken, actions.deleteUser)
router.delete('/delete/:_id', auth.auth,actions.deleteUser)
//get users
router.get('/get',actions.getUsers)

module.exports=router