import * as express from 'express'
const router = express.Router()
import * as userCtrl from '../controllers/userController'


router.post('/user/profile', userCtrl.createProfile)
router.get('/user/profile', userCtrl.getProfile)
router.put('/user/profile', userCtrl.editProfile)
router.delete('/user/profile', userCtrl.deleteProfile)
router.post('/user/profile/avatar', userCtrl.addAvatar)
router.put('/user/profile/avatar', userCtrl.editAvatar)

module.exports = router

