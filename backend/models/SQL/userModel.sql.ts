import User from "../TS/userModel"
import {DataTypes} from "sequelize"
import sequelize from "../index"

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

export default User