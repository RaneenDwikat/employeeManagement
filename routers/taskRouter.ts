import express from 'express'
export const taskRouter = express.Router()
import taskController from '../controller/taskController'
import auth from '../middleware/auth'


const controller=new taskController();



// add a new task
taskRouter.post('/task',auth,controller.addTask)
// update task 
taskRouter.put('/task/:_id',controller.updateTask)