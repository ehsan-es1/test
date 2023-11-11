let {Router} = require("express")
Router = new Router()

const newUserController = require("../controllers/users/newUserController")
Router.post("/new", newUserController.post)

const deleteUserController = require("../controllers/users/deleteUserController")
Router.post("/delete", deleteUserController.post)

module.exports = Router