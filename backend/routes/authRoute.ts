import * as express from 'express'
import {Router} from 'express'
import * as authCtrl from '../controllers/authController'

const authRoute:Router = express.Router()

authRoute.post('/signup', authCtrl.signup)
authRoute.post('/login', authCtrl.login)

export default authRoute


