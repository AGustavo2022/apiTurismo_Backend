import mongoose, { Schema } from "mongoose";
import  { DaoMongoose }  from "./daoMongoose.js";

const UsersCollection = 'users'

const schemaUsers = new Schema({
    id: { type: String, required: true},
    user: { type: String, required: true},
    password: { type: String, required: true},
    role: { type: String, enum: ['user','developer','administrator'], default: 'user' }
    
}, {timestamps: true, versionKey: false})

const usersModel = mongoose.model(UsersCollection, schemaUsers)

export const userDaoMongoose = new DaoMongoose(usersModel)

