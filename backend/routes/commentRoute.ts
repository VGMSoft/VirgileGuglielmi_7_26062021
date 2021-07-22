import * as express from 'express'

const router = express.Router()
import * as commentCtrl from '../controllers/commentController'

import {auth} from '../middleware/auth'


router.get('/',  commentCtrl.getAllComments)
router.get('/:id',  commentCtrl.getOneComment)
router.post('/',  commentCtrl.createComment)
router.put('/:id',  commentCtrl.editComment)
router.delete('/:id',  commentCtrl.deleteComment)

module.exports = router