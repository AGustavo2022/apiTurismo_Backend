
import { NotFound } from "../models/errors/createErrorFactory.js"
import { User } from "../models/users.models.js"
import { usersRepository } from "../repositories/users.repository.js"
import { criptografidor } from "../utils/cryptography.js"


class AuthService {
    constructor() {}

    async loginSession(user, password) {

        const userSearched = await usersRepository.readOne({user: user})
            if(!userSearched) throw new NotFound('the user does not belong to a user')
            const passwordGood = await criptografidor.comparar(password, userSearched.password)
            if (passwordGood) {
                await usersRepository.updateOne({id: userSearched.id},{updatedAt: new(Date)})
                const userPublico = new User(userSearched)
                return userPublico.publicoDto()
            }else{
                if(!passwordGood) throw new NotFound('the password is invalid')
            }
    }
}

export const authService = new AuthService()