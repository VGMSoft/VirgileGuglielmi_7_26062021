import sequelize from "../db.connect"
import {DataTypes} from "sequelize"
import Like from "./../TS/likeModel"
import User from "../TS/userModel";
import Post from "../TS/postModel";

export const initLike = () => {

  Like.init({
    state: DataTypes.BOOLEAN
  }, {sequelize, modelName: 'likes'})

  Post.hasMany(Like, {foreignKey: 'postId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'})
  Like.belongsTo(Post, {foreignKey: 'postId'})

  User.hasMany(Like, {foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'})
  Like.belongsTo(User, {foreignKey: 'userId'})
}