import express from 'express'
export const taskRouter = express.Router()
import taskController from '../controller/taskController'
import auth from '../middleware/auth'
import {getFromCache} from '../cache/task'


const controller=new taskController();



// add a new task
taskRouter.post('/task',auth,controller.addTask)
// update task 
taskRouter.put('/task/:_id',controller.updateTask)
//get task
taskRouter.get("/get/:_id",getFromCache,controller.getTask)