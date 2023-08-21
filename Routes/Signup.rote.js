const {Router} =require("express")

const express=require("express")

const JWT=require('jsonwebtoken')

const bcrypt=require('bcrypt')

const  signupModel=require("../Model/signupmodel")


require("dotenv").config()

const postRoute=Router()

postRoute.post("/signup", async(req,res)=>{

    try {
        req.body.Password= await bcrypt.hash(req.body.Password,8)
        const User= await signupModel.create(req.body)
        
        res.status(200).send('User Created Successfully',User)
    } catch (error) {
        console.log(error)
    }
})


postRoute.post('/login', async(req, res)=>{
    let Users= await signupModel.findOne({Email: req.body.Email})
    if(Users){
        let Password= await bcrypt.compare(req.body.Password,Users.Password)
        if(Password){
            let token= JWT.sign({'Id':Users._id},process.env.key)
            res.send({message:'login successful',token:token})
        }
        else{
            res.send({message:'inncorrect password'})
        }
    }
    else{
        res.send({message:'Email not found'})
    }
})

module.exports=postRoute