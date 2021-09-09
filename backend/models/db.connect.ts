import {Sequelize} from 'sequelize'

// const sequelize: Sequelize = new Sequelize(`${process.env.DB_DIALECT}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
//TODO : Unable to create  database from scratch
const sequelize: Sequelize = new Sequelize("mysql://root:Lucas2021!@localhost:3306/groupomania")

export default sequelize