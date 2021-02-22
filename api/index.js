const express = require("express")
require("dotenv").config()
const app = express()

app.get("/users", (req, res, next) => {
    const users = ["gal", "dorin"]
    res.json(users)
})
console.log("starting server")
app.listen(process.env.PORT, () => { console.log("Container") })