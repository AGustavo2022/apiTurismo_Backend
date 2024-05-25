import { gastronomyServices } from "../services/gastronomy.services.js"
import { usersServices } from "../services/users.services.js"

export async function handleGet(req, res, next){
    const gid = req.params.gid
    try{
        const gastronomy = await gastronomyServices.getGastronomy(gid)
        res.json(gastronomy)
    }catch (error){
        next(error)
    }
}

export async function handlePost(req, res, next){
    const gastronomy = req.body
    try{
        const newGastronomy = await gastronomyServices.postGastronomy(gastronomy)
        res.json(newGastronomy)
    }catch (error){
        next(error)
    }
}

export async function handlePut(req, res, next){
    const gid = req.params.gid
    const gastronomy = req.body
    try{
        await gastronomyServices.putGastronomy(gid, gastronomy)
        res.json({ message:'Usuario Actualizado' })
    }catch (error){
        next(error)
    }


}

export async function handleDelete(req, res, next){
    const gid = req.params.gid
    try{
        await gastronomyServices.deleteGastronomy(gid)
        res.json({ message:'Usuario Eliminado' })
    }catch(error){
        next(error)
    }

}