import * as express from 'express'
import {Router} from 'express'
import * as commentCtrl from '../controllers/commentController'
const passport = require('passport')
const commentRoute: Router = express.Router({mergeParams:true})


commentRoute.post('/', passport.authenticate('jwt', {session: false}), commentCtrl.createComment)
commentRoute.get('/', passport.authenticate('jwt', {session: false}), commentCtrl.getAllPostComments)
commentRoute.get('/:id', passport.authenticate('jwt', {session: false}), commentCtrl.getOneComment)
commentRoute.put('/:id', passport.authenticate('jwt', {session: false}), commentCtrl.editComment)
commentRoute.delete('/:id', passport.authenticate('jwt', {session: false}), commentCtrl.deleteComment)

export default commentRoute