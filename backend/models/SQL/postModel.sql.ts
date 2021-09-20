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
    content: DataTypes.TEXT,
    date: DataTypes.DATE
  }, {sequelize, modelName: 'posts'})
0
  //Association
  User.hasMany(Post, {foreignKey: 'userId'})
  Post.belongsTo(User, {foreignKey: 'userId'})

}
