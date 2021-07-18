//Calling env vars
import * as dotenv from 'dotenv'

dotenv.config({path: __dirname + '/.env'})

import express = require('express')
import {Application} from "express"

const path = require('path')
const cors = require('cors')


// App type
const app: Application = express()
console.log(String.fromCodePoint(0x1F44B),'Welcome to groupomania backend')

//Cors
let corsOptions: { origin: string } = {
  origin: "http://localhost:8801"
}
app.use(cors(corsOptions))
//HEADERS
//const helmet = require('helmet')
import helmet = require("helmet")

app.use(helmet())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})

//Parse Request
app.use(express.json()) // Replace body-parser

//DB connect
import {Sequelize, Model, DataTypes} from 'sequelize'

const sequelize = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
//console.log(sequelize)

//TODO: Relocate section -------------------------------------------------- v
import User from "./models/userModel"

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  pseudo: DataTypes.STRING,
  avatar_url: DataTypes.STRING,
  signup_date: DataTypes.DATE,
  pwd_set: DataTypes.DATE,
}, {sequelize, modelName: 'users'})

import Post from "./models/postModel"

Post.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  post_content: DataTypes.TEXT,
  post_date: DataTypes.DATE
}, {sequelize, modelName: 'posts'})

import Comment from "./models/commentModel"

Comment.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  post_id: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  comment_content: DataTypes.TEXT,
  comment_date: DataTypes.DATE
}, {sequelize, modelName: 'comments'})


import Likes from "./models/likeModel"

Likes.init({
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  post_id: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  like_state: DataTypes.BOOLEAN
}, {sequelize, modelName: 'likes'})

//TODO: Relocate section -------------------------------------------------- ^

const testDbConnect = async () => {
  try {
    await sequelize.authenticate()
    console.log(String.fromCodePoint(0x1F4BF), `️Connection to ${process.env.DB_NAME} DB has been established successfully.`)
    await sequelize.sync()
//TODO: Relocate section -------------------------------------------------- v
    await User.create({
      email: "bla",
      password: "bla",
      pseudo: "bla",
      avatar_url: "bla",
      signup_date: new Date(),
      pwd_set: new Date()
    })
//TODO: Relocate section -------------------------------------------------- ^
  } catch (error) {
    console.error(String.fromCodePoint(0x26D4), 'Unable to connect to the database:', error)
  }
}
testDbConnect()


/*//Import Routes
const userRoutes = require('./routes/userRoute')
const postRoutes = require('./routes/postRoute')
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
