import * as express from 'express'
import {Router} from "express"
const userRoute:Router = express.Router()
import {auth} from '../middleware/auth'
import * as userCtrl from '../controllers/userController'


userRoute.post('/user/profile', userCtrl.createProfile)
userRoute.get('/user/profile', userCtrl.getProfile)
userRoute.put('/user/profile', userCtrl.editProfile)
userRoute.delete('/user/profile', userCtrl.deleteProfile)
userRoute.post('/user/profile/avatar', userCtrl.addAvatar)
userRoute.put('/user/profile/avatar', userCtrl.editAvatar)

export default userRoute

