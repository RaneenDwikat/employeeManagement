import express from 'express'
export const userRouter = express.Router()
import usersController from '../controller/userController'
import auth from '../middleware/auth'
import {limiter} from '../middleware/rateLimitter'

const controller=new usersController();

userRouter.post('/add',auth,limiter, controller.addUser)
//update user
userRouter.put('/update/:_id',limiter,controller.updateUser)
//delete user
// router.delete('/delete/:_id', verifyToken, actions.deleteUser)
userRouter.delete('/delete/:_id', limiter,auth,controller.deleteUser)
//get users
userRouter.get('/get',limiter,controller.getUsers)