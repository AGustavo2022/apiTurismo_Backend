import {BadReques,InternalServerError,NotFound,ServiceUnavailable,Unauthorized} from "../models/errors/createErrorFactory.js"
  
  export function apiErrorHandler(error, req, res, next) {
    const { message } = error
    if (error instanceof BadReques) {
      res.status(400)
    } 
    if (error instanceof Unauthorized) {
      res.status(401)
    } 
    if (error instanceof NotFound) {
      res.status(404)
    } 
    if (error instanceof InternalServerError) {
      res.status(500)
    } 
    if (error instanceof ServiceUnavailable) {
      res.status(503)
    } 
    res.json({ status: 'error', message })
  }
  
  