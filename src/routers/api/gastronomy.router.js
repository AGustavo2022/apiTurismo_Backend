import { Router } from "express";
import * as gastronomyController from '../../controllers/gastronomy.controller.js'
import { validateShema } from "../../middlewares/validator.middlewares.js";
import { gastronomyschema } from "../../schemas/gastronomy.schema.js";
import { isAuthenticated, isCheckRol } from "../../middlewares/authentication.middleware.js";
import { upload } from "../../middlewares/multerFile.middleware.js";



export const gastronomyRouter = Router()

gastronomyRouter.get('/:gid?', gastronomyController.handleGet)
//gastronomyRouter.post('/', isAuthenticated, isCheckRol('administrator'), validateShema(gastronomyschema), gastronomyController.handlePost)
gastronomyRouter.post('/', upload.single('photo_url'), validateShema(gastronomyschema), gastronomyController.handlePost)


gastronomyRouter.put('/:gid?', isAuthenticated, isCheckRol('administrator'), gastronomyController.handlePut )
gastronomyRouter.delete('/:gid?', isAuthenticated, isCheckRol('administrator'), gastronomyController.handleDelete)


// gastronomyRouter.post('/imagen', upload.single('photo_url'), (req, res) =>{
//     console.log(req.file)
//     res.send('termina')
// })