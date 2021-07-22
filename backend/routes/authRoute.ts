import * as express from 'express'
const router = express.Router()
import * as authCtrl from '../controllers/authController'

router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)
router.post('/logout', authCtrl.logout)

module.exports = router


