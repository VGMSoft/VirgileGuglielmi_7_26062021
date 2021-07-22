import * as express from 'express'
import {Router} from "express"

const router: Router = express.Router()
import {auth} from '../middleware/auth'
import multerConfig from "../middleware/multer.config"
import * as postCtrl from '../controllers/postController'

//Post
router.get('/', postCtrl.getAllPosts)
router.get('/:id', postCtrl.getOnePost)
router.post('/', multerConfig, postCtrl.createPost)
router.put('/:id', multerConfig, postCtrl.editPost)
router.delete('/:id', postCtrl.deletePost)

module.exports = router