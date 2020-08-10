const express = require("express")
const router = express.Router()
const signIn = require("../controller/controller")

router.get("/home", signIn)

module.exports = router