import express from 'express'
export const taskRouter = express.Router()
import taskController from '../controller/taskController'
import auth from '../middleware/auth'
import { limiter } from '../middleware/rateLimitter';


const controller=new taskController();



// add a new task
taskRouter.post('/task',limiter,auth,controller.addTask)
// update task 
taskRouter.put('/task/:_id',limiter,controller.updateTask)
//get task
taskRouter.get("/get/:_id",limiter,controller.getTask)