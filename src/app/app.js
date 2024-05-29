import express from "express"
import { apiRouter } from "../routers/api.router.js"
import morgan from "morgan"
import cookieParser from 'cookie-parser'
import { COOKIE_SECRET } from "../config/auth.config.js"
import { CORS_URL } from "../config/cors.config.js";
import { extraerToken } from "../middlewares/authentication.middleware.js"
import  cors  from "cors";


export const app = express()

app.use(cors({
    origin: CORS_URL,
    credentials: true,
}))
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
//app.use('/photo_url', express.static('./public/uploads'))

app.use(cookieParser(COOKIE_SECRET))
app.use(extraerToken)

app.use('/api', apiRouter)