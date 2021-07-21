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

//Cors------------------------------------------------------------------------------------------------------------------
let corsOptions: { origin: string } = {
  origin: `${process.env.CORS_OPTION}`
}
app.use(cors(corsOptions))

//HEADERS---------------------------------------------------------------------------------------------------------------
import helmet = require("helmet")

app.use(helmet())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})

//Parse Request---------------------------------------------------------------------------------------------------------
app.use(express.json()) // Replace body-parser

//DB connect------------------------------------------------------------------------------------------------------------
import sequelize from "./models/index"
sequelize.authenticate()
  .then(() => {
    console.log(String.fromCodePoint(0x1F4BF), `️Connection to ${process.env.DB_NAME} DB has been established successfully.`)
    //-> Prod
    //sequelize.sync
    //-> Dev
    sequelize.sync({force: true})
      .then(() => {
        console.log("Drop and re-sync db.")
      })
  })
  .catch((error) => console.error(String.fromCodePoint(0x26D4), 'Unable to connect to the database:', error))
console.log(String.fromCodePoint(0x1F4BF), `️Connection to ${process.env.DB_NAME} DB has been established successfully.`)

//Import Routes
//const userRoutes = require('./routes/authRoute')
/*const postRoutes = require('./routes/postRoute')
const commentsRoutes = require('./routes/commentRoute')
const profileRoute = require("./routes/profileRoute")

//Serving images
app.use('/images/posts', express.static(path.join(__dirname, 'images/posts')))
app.use("/images//avatars", express.static(path.join(__dirname, "images//avatars")));
//Defining Routes
app.use('/api/auth', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/posts/:id/comments', commentsRoutes)
app.use("/api/profile", profileRoute)*/

module.exports = app
