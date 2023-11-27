const mongoose = require('mongoose')
const AuthSchema = new mongoose.Schema({
    name: String,
    email: {
        type:String,
        unique:true
    },
   password: String
})

const AuthModel = mongoose.model("auth",AuthSchema)

module.exports =  AuthModel