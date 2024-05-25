import { usersServices } from "../services/users.services.js"

export async function handleGet(req, res, next){
    const uid = req.params.uid
    try{
        const user = await usersServices.getUser(uid)
        res.json(user)
    }catch (error){
        next(error)
    }
}


export async function handlePut(req, res, next){
    const uid = req.params.uid
    const update = req.body
    try{
        const userUpdate = await usersServices.getPut(uid, update)
        res.json({ message:'Usuario Actualizado' })
    }catch (error){
        next(error)
    }


}

export async function handleDelete(req, res, next){
    const uid = req.params.uid
    try{
        const userDelete = await usersServices.getDelete(uid)
        res.json({ message:'Usuario Eliminado' })
    }catch(error){
        next(error)
    }

}