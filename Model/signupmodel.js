const mongoose=require('mongoose')

const PostSchema=mongoose.Schema({
    Email:String,
    Password:String,
    Confirm_Password:String,
    
})

const signupModel=mongoose.model("signup_Users", PostSchema)

module.exports=signupModel