//Calling env vars-----------------------------------------------------------------------------------------------------
import * as dotenv from "dotenv"
dotenv.config({path: __dirname + '/.env'})

import * as path from "path"

// App definition-------------------------------------------------------------------------------------------------------
import express = require("express")
import {Application} from "express"
const app: Application = express()
console.log(String.fromCodePoint(0x1F44B), 'Welcome to groupomania backend')

//DB connect & init-----------------------------------------------------------------------------------------------------
import {connectDB, initDB} from "./models"
connectDB()
initDB()


//JWT Auth--------------------------------------------------------------------------------------------------------------
const passport = require("passport")
import {initPassport} from "./middleware/passport.config"
initPassport(passport)
app.use(passport.initialize())

//CORS------------------------------------------------------------------------------------------------------------------
import cors from "cors"
let corsOptions: { origin: string } = {
  origin: `${process.env.CORS_ORIGIN}`
}
app.use(cors(corsOptions))

//Headers---------------------------------------------------------------------------------------------------------------
import helmet = require ("helmet")
app.use(helmet())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  next()
})

//Parse Request---------------------------------------------------------------------------------------------------------
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Import Routes---------------------------------------------------------------------------------------------------------
import authRoute from "./routes/authRoute"
import profileRoute from "./routes/profileRoute"
import postRoute from "./routes/postRoute"
import commentRoute from "./routes/commentRoute"
import likeRoute from "./routes/likeRoute"
import {getAllPostComments} from "./controllers/commentController";

//Defining Routes-------------------------------------------------------------------------------------------------------
app.use('/auth', authRoute)
app.use('/api/profile', profileRoute)
app.use('/api/posts/:id/comments', commentRoute)
app.use('/api/posts', postRoute)
app.use("/api/posts/:postId/like", likeRoute)

//Serving images--------------------------------------------------------------------------------------------------------
app.use(express.static('images'));
module.exports = app
