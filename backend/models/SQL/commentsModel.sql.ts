import sequelize from "../db.connect"
import {DataTypes} from "sequelize"
import Comment from "./../TS/commentModel"
import User from "../TS/userModel"
import Post from "../TS/postModel";

export const initComment = () => {
  Comment.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    content: DataTypes.TEXT,
    date: DataTypes.DATE
  }, {sequelize, modelName: 'comments'})

  Comment.belongsTo(Post)
  Post.hasMany(Comment)

  Comment.belongsTo(User, {foreignKey: 'postId'})
  User.hasMany(Comment, {foreignKey: 'postId'})
}