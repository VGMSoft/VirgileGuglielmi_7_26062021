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
    userId: DataTypes.INTEGER.UNSIGNED,
    postId: DataTypes.INTEGER.UNSIGNED,
    content: DataTypes.TEXT,
    date: DataTypes.DATE
  }, {sequelize, modelName: 'comments'})



  User.hasMany(Comment, {foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'})
  Comment.belongsTo(User, {foreignKey: 'userId'})


  Post.hasMany(Comment, {foreignKey: 'postId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'})
  Comment.belongsTo(Post, {foreignKey: 'postId'})
}