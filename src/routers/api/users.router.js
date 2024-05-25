import { Router } from "express";
import * as userController from '../../controllers/users.controller.js'
import { isAuthenticated, isCheckRol } from "../../middlewares/authentication.middleware.js"
import { validateShema } from "../../middlewares/validator.middlewares.js";
import { registerschema } from "../../schemas/auth.schema.js";




export const userRouter = Router()

userRouter.get('/:uid?', isAuthenticated, isCheckRol('developer'), userController.handleGet)
userRouter.put('/:uid', isAuthenticated, isCheckRol('developer'), validateShema(registerschema), userController.handlePut)
userRouter.delete('/:uid', isAuthenticated, isCheckRol('developer'), userController.handleDelete)