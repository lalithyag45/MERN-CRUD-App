const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const AuthSchema = new mongoose.Schema({
    name: String,
    email: String,
   password: String
})

const UserModel = mongoose.model("users",UserSchema)
const AuthModel = mongoose.model("auth",AuthSchema)

module.exports =  {UserModel, AuthModel}