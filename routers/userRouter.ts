import express from 'express'
export const userRouter = express.Router()
import usersController from '../controller/userController'
import auth from '../middleware/auth'
import {limiter} from '../middleware/rateLimitter'

const controller=new usersController();

userRouter.post('/add',auth, async()=>await  limiter(60,10), controller.addUser)
//update user
userRouter.put('/update/:_id',async()=>await  limiter(60,10),controller.updateUser)
//delete user
// router.delete('/delete/:_id', verifyToken, actions.deleteUser)
userRouter.delete('/delete/:_id', async()=>await  limiter(60,10),auth,controller.deleteUser)
//get users
userRouter.get('/get',async()=>await  limiter(60,10),controller.getUsers)