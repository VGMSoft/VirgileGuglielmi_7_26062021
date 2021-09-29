import sequelize from "./db.connect"
import {initUser} from "./SQL/userModel.sql"
import {initPost} from "./SQL/postModel.sql"
import {initComment} from "./SQL/commentsModel.sql"
import {initLike} from "./SQL/likeModel.sql"

//set Admin
import User from "./TS/userModel";
import {encrypt, iv, key} from "../middleware/cryptoJS";
import bcrypt from 'bcrypt'

export const connectDB = async () => {
  sequelize.authenticate()
    .then(() => {
      console.log(String.fromCodePoint(0x1F4BF), `️Connection to ${process.env.DB_NAME} DB has been established successfully.`)
      //-> Prod
      sequelize.sync()
        .then(() => {
          console.log(String.fromCodePoint(0x26A0), "<PROD MODE>")
        })
      //-> Dev
      // sequelize.sync({force: true})
      //   .then(() => {
      //     console.log(String.fromCodePoint(0x26A0),"<DEV MODE> : Drop and re-sync db.")
      //   })
    })
    .catch((error) => console.error(String.fromCodePoint(0x26D4), 'Unable to connect to the database:', error))

}

export const initDB = async () => {
  initUser()
  initPost()
  initComment()
  initLike()
}

export const setAdmin = async () => {
  try {
  await User.create({
    email: encrypt(`${process.env.ADMIN_EMAIL}`, key, iv),
    password: await bcrypt.hash(`${process.env.ADMIN_PASS}`, 10),
    firstname: "Admin",
    lastname: "groupomania",
    pseudo: "Admin",
    avatar_url: undefined,
    signup_date: new Date(),
    role: "ADMIN"
  })}
catch (error)
  {
    return error
  }
}


