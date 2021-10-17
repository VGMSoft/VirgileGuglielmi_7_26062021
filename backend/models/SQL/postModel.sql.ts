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

  //Association
  User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  Post.belongsTo(User, {foreignKey: 'userId'})

}
