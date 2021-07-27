import sequelize from "../db.connect"
import {DataTypes} from "sequelize"
import User from "./../TS/userModel"

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
    avatar_url: DataTypes.STRING,
    signup_date: DataTypes.DATE,
    pwd_set: DataTypes.DATE,
  }, {sequelize, modelName: 'users'})
  console.log("Table user initialisée")
}


