import * as express from 'express'
import {Router} from 'express'
import passport from 'passport'
import * as userCtrl from '../controllers/profileController'
import {upload} from "../middleware/multer.config";

// const MIME_TYPES: { "image/jpg": string, "image/jpeg": string, "image/png": string } = {
//   'image/jpg': 'jpg',
//   'image/jpeg': 'jpg',
//   'image/png': 'png'
// }
// const multer = require('multer')
// // const uploadAvatar = multer({dest: 'images/profile/'})

const profileRoute: Router = express.Router()
profileRoute.get('/:id', passport.authenticate('jwt', {session: false}), userCtrl.getProfile)
profileRoute.put('/:id', passport.authenticate('jwt', {session: false}), upload, userCtrl.editProfile)
profileRoute.delete('/:id', passport.authenticate('jwt', {session: false}), userCtrl.deleteProfile)

export default profileRoute

