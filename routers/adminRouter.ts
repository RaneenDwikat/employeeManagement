
import express from 'express'
export const adminRouter = express.Router()
import adminsController from '../controller/adminController'
import {checkValidation} from '../middleware/validation'
import {adminSchemaValidation} from '../validation/admin'

const controller=new adminsController();

adminRouter.post('/login',checkValidation(adminSchemaValidation), controller.login)




