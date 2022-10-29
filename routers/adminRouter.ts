
import express from 'express'
export const adminRouter = express.Router()
import adminsController from '../controller/adminController'
import { limiter } from '../middleware/rateLimitter'
import {checkValidation} from '../middleware/validation'
import {adminSchemaValidation} from '../validation/admin'

const controller=new adminsController();

adminRouter.post('/login',limiter,checkValidation(adminSchemaValidation), controller.login)




