import { Router } from "express";
import { authRouter } from "./api/auth.router.js";
import { apiErrorHandler } from "../middlewares/apiErrorHandler.js";
import { userRouter } from "./api/users.router.js";
import { gastronomyRouter } from "./api/gastronomy.router.js";

export const apiRouter = Router()


apiRouter.use('/auth', authRouter)
apiRouter.use('/user', userRouter)
apiRouter.use('/gastronomy', gastronomyRouter)

apiRouter.use(apiErrorHandler)
