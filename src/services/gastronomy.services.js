import { NotFound } from "../models/errors/createErrorFactory.js";
import { Gastronomy } from "../models/gastronomy.models.js";
import { gastronomyRepository } from "../repositories/gastronomy.repository.js";


class GastronomyServices {
    constructor() {}

    async getGastronomy (gid){
        if (gid != undefined){
            const gastronomy = await gastronomyRepository.readOne({id:gid})
            if(!gastronomy) throw new NotFound('the Id does not belong to a task')
            const datos = new Gastronomy(gastronomy)
            return datos.dto()
        }else{
            const gastronomy = await gastronomyRepository.readMany()
            const arrGastronomy = []
            gastronomy.forEach(element => {
                const datosPublicos = new Gastronomy(element)
                arrGastronomy.push(datosPublicos.dto())
            })
            return arrGastronomy
        }
    }

    async postGastronomy (gastronomyBody){

        const gastronomyRequest = new Gastronomy(gastronomyBody)
        const datosGastronomy = gastronomyRequest.dto()  
        const gastronomyResponse = await gastronomyRepository.create(datosGastronomy) 
        return  gastronomyResponse
    }

    async putGastronomy (gid, update){
        const gastronomyUpdate = await gastronomyRepository.updateOne({id: gid},update)
        return gastronomyUpdate
    }

    async deleteGastronomy (gid){
        const gastronomy = await this.getGastronomy(gid)
        if(!gastronomy) throw new NotFound('the Id does not belong to a gastronomy')
        const gastronomyDelete = await gastronomyRepository.deleteOne({id: gid})
        return gastronomyDelete
    }
}

 export const gastronomyServices = new GastronomyServices()