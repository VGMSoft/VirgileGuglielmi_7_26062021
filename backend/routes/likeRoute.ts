import * as express from 'express'
const likeRoute = express.Router()
import * as likeCtrl from '../controllers/likeController'


likeRoute.get('/:id',  likeCtrl.getLike)
likeRoute.post('/',  likeCtrl.likePost)
likeRoute.put('/:id',  likeCtrl.updateLike)

export default likeRoute