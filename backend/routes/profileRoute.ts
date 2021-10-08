import * as express from 'express'
import {Router} from 'express'
import * as userCtrl from '../controllers/profileController'
import multer from "../middleware/multer.config"
import passport from 'passport'

const profileRoute: Router = express.Router()

profileRoute.get('/:id', passport.authenticate('jwt', {session: false}), userCtrl.getProfile)
profileRoute.put('/:id', passport.authenticate('jwt', {session: false}), userCtrl.editProfile)
profileRoute.delete('/:id', passport.authenticate('jwt', {session: false}), userCtrl.deleteProfile)
profileRoute.post('/avatar', passport.authenticate('jwt', {session: false}), userCtrl.addAvatar)
profileRoute.put('/avatar', passport.authenticate('jwt', {session: false}), userCtrl.editAvatar)

export default profileRoute

