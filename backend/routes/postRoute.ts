import * as express from 'express'
import {Router} from "express"

const postRoute: Router = express.Router()
import {auth} from '../middleware/auth'
import multerConfig from "../middleware/multer.config"
import * as postCtrl from '../controllers/postController'

//Post
postRoute.get('/', postCtrl.getAllPosts)
postRoute.get('/:id', postCtrl.getOnePost)
postRoute.post('/', multerConfig, postCtrl.createPost)
postRoute.put('/:id', multerConfig, postCtrl.editPost)
postRoute.delete('/:id', postCtrl.deletePost)

export default postRoute