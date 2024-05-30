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
    if(!req.file){
        return res.status(400).json({message:'No image file found'})
    }
    if(req.file.mimetype !== 'image/jpeg'){
        return res.status(400).json({message:'No JPEG file found'})
    }
    if(req.file.size > 50000){
        return res.status(400).json({message:'image oversized'})
    }
    console.log(req.file)
    const gastronomy = req.body
    gastronomy.photo_url = `uploads/${req.file.filename}`

    console.log(req.file)
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