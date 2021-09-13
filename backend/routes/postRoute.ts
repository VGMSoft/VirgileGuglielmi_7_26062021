import * as express from 'express'
import {Router} from 'express'
import * as postCtrl from '../controllers/postController'
import passport from 'passport'

const postRoute: Router = express.Router()

//Post
postRoute.get('/', passport.authenticate('jwt', {session: false}), postCtrl.getAllPosts)
postRoute.get('/:id', passport.authenticate('jwt', {session: false}), postCtrl.getOnePost)
postRoute.post('/', passport.authenticate('jwt', {session: false}), postCtrl.createPost)
postRoute.put('/:id', passport.authenticate('jwt', {session: false}), postCtrl.editPost)
postRoute.delete('/:id', passport.authenticate('jwt', {session: false}), postCtrl.deletePost)

export default postRoute