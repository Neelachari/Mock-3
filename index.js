const express=require("express")
const { connection } = require("./Config/db")
require("dotenv").config()
const postRoute=require("./Routes/Signup.rote")
const cors=require("cors")

const app=express()

app.use(express.json())

app.use(cors())


app.use("/users",postRoute)

app.listen(process.env.PORT, async()=>{
    try {
        await connection
        console.log("running on port ", process.env.PORT)
        console.log("server is runnning")
    } catch (error) {
        console.log(error)
    }
})