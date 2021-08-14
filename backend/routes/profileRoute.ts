import * as express from 'express'
import {Router} from 'express'
import * as userCtrl from '../controllers/profileController'
const passport = require('passport')


const profileRoute: Router = express.Router()

profileRoute.get('/', passport.authenticate('jwt', { session: false }),userCtrl.getProfile)
profileRoute.put('/', passport.authenticate('jwt', { session: false }),userCtrl.editProfile)
profileRoute.delete('', passport.authenticate('jwt', { session: false }),userCtrl.deleteProfile)
profileRoute.post('/avatar', passport.authenticate('jwt', { session: false }),userCtrl.addAvatar)
profileRoute.put('/avatar', passport.authenticate('jwt', { session: false }),userCtrl.editAvatar)

export default profileRoute

