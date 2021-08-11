import * as express from 'express'
import {Router} from "express"

const profileRoute: Router = express.Router()
import {auth} from '../middleware/passport.config'
import * as userCtrl from '../controllers/profileController'

profileRoute.post('/', userCtrl.createProfile)
profileRoute.get('/', auth, userCtrl.getProfile)
profileRoute.put('/', auth, userCtrl.editProfile)
profileRoute.delete('', auth, userCtrl.deleteProfile)
profileRoute.post('/avatar', auth, userCtrl.addAvatar)
profileRoute.put('/avatar', auth, userCtrl.editAvatar)

export default profileRoute

