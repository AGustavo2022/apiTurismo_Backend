import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/auth.config.js'

class Cryptography {
    hashear(dato){
        return bcrypt.hashSync(dato,10)
    }
    comparar(actual, almacenada) {
        return bcrypt.compareSync(actual, almacenada)
    }
    generarToken(dato){
        return jwt.sign(dato, JWT_SECRET, { expiresIn: '24h'})
    }
    decodificarToken(token) {
        try {
          return jwt.verify(token, JWT_SECRET)
        } catch (error) {
          throw new Error('error de autenticacion: sesión expirada')
        }
      }
}

export const criptografidor = new Cryptography()