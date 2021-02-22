const express = require("express")

const app = express()

app.get("/users", (req, res, next) => {
    const users = ["gal", "dorin"]
    res.json(users)
})

app.listen(3500)