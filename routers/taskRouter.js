

const express = require('express')
const router=express.Router()
const actions = require('../controller/taskController')
const auth=require('../middleware/auth')


// add a new task
router.post('/task',auth.auth,actions.addTask)
// update task 
router.put('/task/:_id',actions.updateTask)



module.exports=router