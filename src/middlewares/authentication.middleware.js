import { Unauthorized } from "../models/errors/createErrorFactory.js"
import { usersRepository } from "../repositories/users.repository.js"
import { criptografidor } from "../utils/cryptography.js"


export function extraerToken(req, res, next) {
    req['accessToken'] = req.signedCookies['authToken']
    next()
}

export async function isAuthenticated(req, res, next) {

    if (!req['accessToken']) {
      return res.status(401).json({message: 'user not authenticated'})
    }
    try {
      const payload = await criptografidor.decodificarToken(req['accessToken'])
      if(!payload) throw new Unauthorized('user not authenticated')
      req.user = payload

      next()
    } catch (error) {
      console.error('Authentication error:', error);
      res.status(401).json({ message: 'authentication failed' })
    }
}


export function isCheckRol(requiredRole) {
  return async (req, res, next) => {
    try {
      if (!req.user) {
        throw new Unauthorized('user not authenticated');
      }
      const user = await usersRepository.readOne({ id: req.user.id });
      if (!user || user.role !== requiredRole) {
        return res.status(403).json({ message: 'Insufficient permissions.' });
      }

      next();
    } catch (error) {
      console.error('Authorization error:', error);
      return res.status(403).json({ message: 'Insufficient permissions.' });
    }
  };
}