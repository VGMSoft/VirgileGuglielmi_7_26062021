import Comment from "../TS/commentModel";
import {DataTypes} from "sequelize";
import Likes from "../TS/likeModel";

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


export default Comment