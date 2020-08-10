const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan") 
const bpdyParser = require("body-parser")
require("dotenv").config()

const signIn= require("./router/router")
const bodyParser = require("body-parser")

const app = express()

const url = process.env.DATABASE_URL
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to dataBase"))
  .catch((err) => console.log("dataBase connection error", err));

//middleW
app.use(morgan("dev"))
app.use(bodyParser.json())

app.use("/api", signIn)


const port = process.env.PORT || 5101
app.listen(port, ()=>{
    console.log(`Connected to port ${port}`)
})