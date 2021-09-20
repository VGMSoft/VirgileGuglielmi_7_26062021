import sequelize from "../db.connect"
import {DataTypes} from "sequelize"
import Like from "./../TS/likeModel"
import User from "../TS/userModel";
import Post from "../TS/postModel";

export const initLike = () => {

  Like.init({
    state: DataTypes.BOOLEAN
  }, {sequelize, modelName: 'likes'})

  Like.belongsTo(Post)
  Post.hasMany(Like)

  Like.belongsTo(User, {foreignKey: 'postId'})
  User.hasMany(Like, {foreignKey: 'postId'})
}