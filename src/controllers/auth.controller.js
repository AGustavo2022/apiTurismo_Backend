import { authService } from "../services/auth.services.js"
import { usersServices } from "../services/users.services.js"
import { criptografidor } from "../utils/cryptography.js"


export async function handleLogin(req, res, next){
  const user = req.body.user
  const password = req.body.password
  try{
      const userSearched = await authService.loginSession(user, password)
      const access_token = criptografidor.generarToken(userSearched)
      //httpOnly: false, para developer. en true no toma la cookie el frontend con React
      res.cookie('authToken', access_token, { httpOnly: false, signed: true, maxAge: 1000 * 60 * 60 }) 
      res.json({ status: 'success', massage: 'Inicio de sesión exitoso', playload: userSearched});       
  } catch (error) {
      next(error);
    }
}

export async function handleRegister(req, res, next){
  const userBody = req.body
  try{
      const userPost = await usersServices.postUser(userBody)
      const access_token = criptografidor.generarToken(userPost)
      //httpOnly: false, para developer. en true no toma la cookie el frontend con React
      res.cookie('authToken', access_token, { httpOnly: false, signed: true, maxAge: 1000 * 60 * 60 })
      res.json({ status: 'success', massage: 'Registro exitoso', playload: userPost });       
  }catch (error){
      next(error)
  }
}

export async function handlelogout(req, res, next){
  res.clearCookie('authToken', {signed: true,httpOnly: true})
  res.json({message: 'Logout'})
}

export async function handleCurrent(req, res, next) {
  const userVerify = req.user
  res.json({status: 'verify',massage: 'Usuario verificado',playload: userVerify})
}