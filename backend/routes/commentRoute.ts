import * as express from 'express'
import {Router} from "express"
const commentRoute:Router = express.Router()
import * as commentCtrl from '../controllers/commentController'

import {auth} from '../middleware/passport.config'


commentRoute.get('/',  commentCtrl.getAllComments)
commentRoute.get('/:id',  commentCtrl.getOneComment)
commentRoute.post('/',  commentCtrl.createComment)
commentRoute.put('/:id',  commentCtrl.editComment)
commentRoute.delete('/:id',  commentCtrl.deleteComment)

export default commentRoute