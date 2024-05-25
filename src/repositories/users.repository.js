import { userDaoMongoose } from "../daos/user.dao.mongoose.js";
import { GenericRepository } from "./generic.repository.js";


export const usersRepository = new GenericRepository(userDaoMongoose)