import sequelize from "../db.connect"
import {DataTypes} from "sequelize"
import Post from "./../TS/postModel"
import User from "../TS/userModel"

export const initPost = () => {
  Post.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    post_content: DataTypes.TEXT,
    post_date: DataTypes.DATE
  }, {sequelize, modelName: 'posts'})
0
  //Association
  User.hasMany(Post)
  Post.belongsTo(User)

}
