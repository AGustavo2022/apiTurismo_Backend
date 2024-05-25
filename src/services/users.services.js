import { NotFound } from "../models/errors/createErrorFactory.js";
import { User, UserPublico } from "../models/users.models.js";
import { usersRepository } from "../repositories/users.repository.js";
import { criptografidor } from "../utils/cryptography.js";


class UsersServices {
    constructor() {}

    async getUser (uid){
        if (uid != undefined){
            const user = await usersRepository.readOne({id:uid})
            if(!user) throw new NotFound('the Id does not belong to a user')
            const datosPublicos = new User(user)
            return datosPublicos.dto()
        }else{
            const users = await usersRepository.readMany()
            const arrUsers = []
            users.forEach(element => {
                const datosPublicos = new User (element)
                arrUsers.push(datosPublicos.dto())
            })
            return arrUsers
        }
    }

    async postUser (userBody){
        const userRegister = new User(userBody)
        const datosUsuarios = userRegister.dto()
        const userFom = await usersRepository.readOne({user:datosUsuarios.user})
        if(userFom) throw new NotFound('The user is already in use')
        datosUsuarios.password = criptografidor.hashear(datosUsuarios.password)        
        const usuarioRegistrado = await usersRepository.create(datosUsuarios)
        const usuarioRegistradoPublico = new UserPublico(usuarioRegistrado)     
        return  usuarioRegistradoPublico.dto()
    }

    async getPut (uid, update){
        const userUpdate = await usersRepository.updateOne({id: uid},update)
        return userUpdate
    }

    async getDelete (uid){
        const user = await this.getUser(uid)
        const userDelete = await usersRepository.deleteOne(user.id)
        return userDelete
    }
}

export const usersServices = new UsersServices()