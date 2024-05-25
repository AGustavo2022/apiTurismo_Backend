import { Router } from "express";
import * as authController from '../../controllers/auth.controller.js'
import { validateShema } from "../../middlewares/validator.middlewares.js"
import { loginschema, registerschema } from "../../schemas/auth.schema.js";
import { isAuthenticated, isCheckRol } from "../../middlewares/authentication.middleware.js";


export const authRouter = Router()

authRouter.get('/current', isAuthenticated, isCheckRol('administrator'), authController.handleCurrent)
authRouter.post('/login',validateShema(loginschema), authController.handleLogin)
authRouter.post('/register', isAuthenticated, isCheckRol('developer'), validateShema(registerschema), authController.handleRegister )
authRouter.delete('/logout', authController.handlelogout)