import * as express from 'express'
import {Router} from "express"
const profileRoute:Router = express.Router()
//import {auth} from '../middleware/auth'
import * as userCtrl from '../controllers/profileController'

profileRoute.post('/', userCtrl.createProfile)
profileRoute.get('/', userCtrl.getProfile)
profileRoute.put('/', userCtrl.editProfile)
profileRoute.delete('', userCtrl.deleteProfile)
profileRoute.post('/avatar', userCtrl.addAvatar)
profileRoute.put('/avatar', userCtrl.editAvatar)

export default profileRoute

