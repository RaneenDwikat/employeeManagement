const express = require('express')
const router=express.Router()
const actions = require('../methods/actions')



//add new user
router.post('/adduser', actions.adduser )
//get all users
router.get('/getusers/:_id', actions.getusers)
//delete spacific user by id
router.delete('/deleteuser/:_id',actions.deleteUser)
//update user info
router.put('/updateuser/:_id',actions.updateUser)
//add new task
router.put('/addtask/:_id',actions.addTask)
//remove task 
router.put('/removetask/:_id',actions.removeTask)


module.exports=router