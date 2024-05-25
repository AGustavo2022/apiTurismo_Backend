import express from "express"
import { apiRouter } from "../routers/api.router.js"
import morgan from "morgan"
import cookieParser from 'cookie-parser'
import { COOKIE_SECRET } from "../config/auth.config.js"
import { extraerToken } from "../middlewares/authentication.middleware.js"
// import  cors  from "cors";

export const app = express()

// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true,
// }))
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser(COOKIE_SECRET))
app.use(extraerToken)

app.use('/api', apiRouter)