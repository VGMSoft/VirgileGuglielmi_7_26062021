//Calling env vars-----------------------------------------------------------------------------------------------------
import * as dotenv from 'dotenv'
dotenv.config({path: __dirname + '/.env'})



import * as path from 'path'


// App type-------------------------------------------------------------------------------------------------------------
import express = require('express')
import {Application} from "express"
const app: Application = express()
console.log(String.fromCodePoint(0x1F44B), 'Welcome to groupomania backend')

//Cors------------------------------------------------------------------------------------------------------------------
import cors from 'cors'
let corsOptions: { origin: string } = {
  origin: `${process.env.CORS_OPTION}`
}
app.use(cors(corsOptions))

//Headers------------------------------------------------------------------------------------------------------------------
import helmet = require ("helmet")
app.use(helmet())

app.use((req, res, next) => {
  //res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})

//Parse Request---------------------------------------------------------------------------------------------------------
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//DB connect 1 init ----------------------------------------------------------------------------------------------------
import {connectDB, initDB} from "./models/index"
connectDB()
initDB()


//JWT Auth-------------------------------------------------------------------------------------------------------------
import passport from 'passport'
import {initPassport} from "./middleware/passport.config";
initPassport(passport)

//Import Routes
import authRoute from './routes/authRoute'
import profileRoute from './routes/profileRoute'
import postRoute from './routes/postRoute'
import commentRoute from './routes/commentRoute'
import likeRoute from './routes/likeRoute'

//Serving images
app.use('/images/posts', express.static(path.join(__dirname, 'images/posts')))
app.use("/images/avatars", express.static(path.join(__dirname, "images/avatars")))

//Defining Routes

app.use('/auth', authRoute)
app.use('/api/profile', profileRoute)
app.use('/api/posts', postRoute)
app.use('/api/posts/:id/comments', commentRoute)
app.use("/api/posts/id/like", likeRoute)

module.exports = app
