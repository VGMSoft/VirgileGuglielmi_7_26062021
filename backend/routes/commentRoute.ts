import * as express from 'express'
import {Router} from 'express'
import * as commentCtrl from '../controllers/commentController'
const passport = require('passport')
const commentRoute: Router = express.Router()


commentRoute.get('/', passport.authenticate('jwt', {session: false}), commentCtrl.getAllComments)
commentRoute.get('/:id', passport.authenticate('jwt', {session: false}), commentCtrl.getOneComment)
commentRoute.post('/', passport.authenticate('jwt', {session: false}), commentCtrl.createComment)
commentRoute.put('/:id', passport.authenticate('jwt', {session: false}), commentCtrl.editComment)
commentRoute.delete('/:id', passport.authenticate('jwt', {session: false}), commentCtrl.deleteComment)

export default commentRoute