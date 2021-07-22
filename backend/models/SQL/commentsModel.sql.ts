import sequelize from "../db.connect"
import {DataTypes} from "sequelize"
import Comment from "./../TS/commentModel"

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