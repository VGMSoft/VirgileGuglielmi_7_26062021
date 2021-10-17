import sequelize from "../db.connect"
import {DataTypes} from "sequelize"
import User from "./../TS/userModel"
import Post from "../TS/postModel";

export const initUser = () => {
  User.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    pseudo: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    avatar_url: DataTypes.STRING,
    signup_date: DataTypes.DATE,
    role: DataTypes.STRING
  }, {sequelize, modelName: 'users'})
}


