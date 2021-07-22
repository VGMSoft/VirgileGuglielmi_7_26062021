import sequelize from "./db.connect"

export const initDB = () => {
  sequelize.authenticate()
    .then(() => {
      console.log(String.fromCodePoint(0x1F4BF), `️Connection to ${process.env.DB_NAME} DB has been established successfully.`)
      //-> Prod
      //sequelize.sync
      //-> Dev
      sequelize.sync({force: true})
        .then(() => {
          console.log("Drop and re-sync db.")
        })
    })
    .catch((error) => console.error(String.fromCodePoint(0x26D4), 'Unable to connect to the database:', error))

}


