import sequelize from "../db.connect"
import {DataTypes} from "sequelize"
import Like from "./../TS/likeModel"
import User from "../TS/userModel";
import Post from "../TS/postModel";


export const initLike = () => {

  Like.init({
    like_state: DataTypes.BOOLEAN
  }, {sequelize, modelName: 'likes'})
  Like.belongsTo(Post)
  Post.hasMany(Like)

  Like.belongsTo(User)
  User.hasMany(Like)
}