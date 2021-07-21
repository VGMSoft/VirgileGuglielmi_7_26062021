import Post from "../TS/postModel";
import {DataTypes} from "sequelize";
import Likes from "../TS/likeModel";

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

export default Post