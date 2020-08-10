const User = require("../model/user")

const signIn = (req, res)=>{
    //const{size,color,quantity,image,price} = req.body
    res.json({message: "Welcome to the server"})
} 
module.exports = signIn