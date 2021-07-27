import sequelize from "./db.connect"

export const connectDB = () => {
  sequelize.authenticate()
    .then(() => {
      console.log(String.fromCodePoint(0x1F4BF), `️Connection to ${process.env.DB_NAME} DB has been established successfully.`)
      //-> Prod
      // sequelize.sync()
      //   .then(() => {
      //     console.log(String.fromCodePoint(0x26A0),"PROD MODE")
      //   })
      //-> Dev
      sequelize.sync({force: true})
        .then(() => {
          console.log(String.fromCodePoint(0x26A0),"DEV MODE : Drop and re-sync db.")
        })
    })
    .catch((error) => console.error(String.fromCodePoint(0x26D4), 'Unable to connect to the database:', error))

}

import {initUser} from "./SQL/userModel.sql"
import {initPost} from "./SQL/postModel.sql"
import {initComment} from "./SQL/commentsModel.sql"
import {initLike} from "./SQL/likeModel.sql"

export const initDB = () => {
  initUser()
  initPost()
  initComment()
  initLike()
}
