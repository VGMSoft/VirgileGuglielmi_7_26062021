import * as express from 'express'
import * as likeCtrl from '../controllers/likeController'
const passport = require('passport')
const likeRoute = express.Router()


likeRoute.get('/:id',  likeCtrl.getAllLikes)
likeRoute.post('/',  likeCtrl.createLike)
likeRoute.put('/:id',  likeCtrl.updateLike)

export default likeRoute