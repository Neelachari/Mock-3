const mongoose=require('mongoose')

const loginSchema=mongoose.Schema({
    Email:String,
    Password:String
    
})

const signupModel=mongoose.model("Users", loginSchema)

module.exports=signupModel