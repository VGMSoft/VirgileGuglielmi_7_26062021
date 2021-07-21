import Likes from "../TS/likeModel";
import {DataTypes} from "sequelize";

Likes.init({
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  post_id: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
  like_state: DataTypes.BOOLEAN
}, {sequelize, modelName: 'likes'})

export default Likes