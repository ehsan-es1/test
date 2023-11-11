const express = require("express")
const config = require("./configs/config.json")

const app = express()

const usersRoutes = require("./routes/users")
app.use("/users", usersRoutes)

app.listen(config.port, () => {
    console.log("App is Running")
})