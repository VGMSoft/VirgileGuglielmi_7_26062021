import * as express from 'express'
const likeRoute = express.Router()
import * as likeCtrl from '../controllers/likeController'


likeRoute.get('/:id',  likeCtrl.getAllLikes)
likeRoute.post('/',  likeCtrl.createLike)
likeRoute.put('/:id',  likeCtrl.updateLike)

export default likeRoute