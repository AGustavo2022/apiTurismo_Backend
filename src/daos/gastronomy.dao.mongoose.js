import mongoose, { Schema } from "mongoose";
import  { DaoMongoose }  from "./daoMongoose.js";

const UsersCollection = 'gastronomy'

const schemaGastronomy = new Schema({
    id: { type: String, required: true},
    name: { type: String, required: true},
    address: { type: String, required: true},
    photo_url: { type: String, required: false}
    
}, {timestamps: true, versionKey: false})

const gastronomyModel = mongoose.model(UsersCollection, schemaGastronomy)

export const gastronomyDaoMongoose = new DaoMongoose(gastronomyModel)
