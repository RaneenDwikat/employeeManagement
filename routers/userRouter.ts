import express from 'express'
export const userRouter = express.Router()
import usersController from '../controller/userController'
import auth from '../middleware/auth'
import {getFromCache} from '../cache/users'

const controller=new usersController();

userRouter.post('/add',auth, controller.addUser)
//update user
userRouter.put('/update/:_id',controller.updateUser)
//delete user
// router.delete('/delete/:_id', verifyToken, actions.deleteUser)
userRouter.delete('/delete/:_id', auth,controller.deleteUser)
//get users
userRouter.get('/get',getFromCache,controller.getUsers)