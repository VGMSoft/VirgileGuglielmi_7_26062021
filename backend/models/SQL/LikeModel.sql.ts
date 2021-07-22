import sequelize from "../db.connect"
import {DataTypes} from "sequelize"
import Like from "./../TS/likeModel"

Like.init({
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  post_id: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  like_state: DataTypes.BOOLEAN
}, {sequelize, modelName: 'likes'})

export default Like