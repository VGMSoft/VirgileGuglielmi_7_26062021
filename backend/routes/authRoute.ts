import * as express from 'express'
import {Router} from "express"
const authRoute:Router = express.Router()
import * as authCtrl from '../controllers/authController'

//authRoute.post('/signup', authCtrl.signup)
authRoute.post('/login', authCtrl.login)
authRoute.post('/logout', authCtrl.logout)

export default authRoute


