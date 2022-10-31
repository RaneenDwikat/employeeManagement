import express from 'express'
export const taskRouter = express.Router()
import taskController from '../controller/taskController'
import auth from '../middleware/auth'
import { limiter } from '../middleware/rateLimitter';


const controller=new taskController();



// add a new task
taskRouter.post('/task',async()=>await  limiter(60,10),auth,controller.addTask)
// update task 
taskRouter.put('/task/:_id',async()=>await  limiter(60,10),controller.updateTask)
//get task
taskRouter.get("/get/:_id",async()=>await  limiter(60,10),controller.getTask)