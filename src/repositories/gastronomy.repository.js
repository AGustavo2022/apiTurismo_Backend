import { gastronomyDaoMongoose } from "../daos/gastronomy.dao.mongoose.js";
import { GenericRepository } from "./generic.repository.js";


export const gastronomyRepository = new GenericRepository(gastronomyDaoMongoose)