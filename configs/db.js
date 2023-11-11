const sequelize = require("sequelize")
const db = require("./config.json").db

const database = new sequelize(
    db.name,
    db.username,
    db.password,
    {
        host : db.host,
        dialect : db.dialect
    }
)

database.authenticate()
console.log("DataBase is running")

module.exports = database