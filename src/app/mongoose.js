import mongoose from "mongoose";
import { TEST_MONGODB_CNX_STR } from "../config/database.config.js"

export const connectDB = async () => {
    try{
        await mongoose.connect(TEST_MONGODB_CNX_STR)
        console.log(`base de datos conectada en ${TEST_MONGODB_CNX_STR}`)
    }catch (error){
        console.log(error)
    }
}