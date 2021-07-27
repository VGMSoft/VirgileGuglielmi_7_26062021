//Calling env vars-----------------------------------------------------------------------------------------------------
import * as dotenv from 'dotenv'

dotenv.config({path: __dirname + '/.env'})

import express = require('express')
import {Application} from "express"

const path = require('path')
import cors from 'cors'

// App type-------------------------------------------------------------------------------------------------------------
const app: Application = express()
console.log(String.fromCodePoint(0x1F44B), 'Welcome to groupomania backend')

//TODO Cors------------------------------------------------------------------------------------------------------------------
let corsOptions: { origin: string } = {
  origin: `${process.env.CORS_OPTION}`
}
app.use(cors(corsOptions))

import helmet = require ("helmet")

app.use(helmet())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})

//Parse Request---------------------------------------------------------------------------------------------------------
app.use(express.json()) // Replace body-parser

//DB connect 1 init ----------------------------------------------------------------------------------------------------
import {connectDB, initDB} from "./models/index"
connectDB()
initDB()

//Import Routes
//import authRoute from './routes/authRoute'
import userRoute from './routes/userRoute'
import postRoute from './routes/postRoute'
import commentRoute from './routes/commentRoute'
import likeRoute from './routes/likeRoute'

//Serving images
app.use('/images/posts', express.static(path.join(__dirname, 'images/posts')))
app.use("/images/avatars", express.static(path.join(__dirname, "images/avatars")))
//Defining Routes
//app.use('/api/auth', authRoute)
app.use('/api/profile', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/posts/:id/comments', commentRoute)
app.use("/api/posts/id/like", likeRoute)

module.exports = app
