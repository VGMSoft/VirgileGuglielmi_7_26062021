import * as express from 'express'
const router = express.Router()
import * as likeCtrl from '../controllers/likeController'


router.get('/:id',  likeCtrl.getLike)
router.post('/',  likeCtrl.likePost)
router.put('/:id',  likeCtrl.updateLike)

module.exports = router