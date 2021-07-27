import * as express from 'express'
import {Router} from "express"
const userRoute:Router = express.Router()
import {auth} from '../middleware/auth'
import * as userCtrl from '../controllers/userController'

userRoute.post('/', userCtrl.createProfile)
userRoute.get('/', userCtrl.getProfile)
userRoute.put('/', userCtrl.editProfile)
userRoute.delete('', userCtrl.deleteProfile)
userRoute.post('/avatar', userCtrl.addAvatar)
userRoute.put('/avatar', userCtrl.editAvatar)

export default userRoute

