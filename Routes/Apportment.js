const express = require('express')
const Route = express.Router()

const AppoiModal = require('../Model/Appointment.Route')


Route.post('/appointments', async (req, res) => {
    let postData =new AppoiModal (req.body)
    console.log(postData)
    await postData.save()
    res.status(200).send({ postData: postData, message: "your appointments created" })
})


Route.patch('/update/:id', async (req, res) => {
    let UpdatePost = await AppoiModal.updateOne({ _id: req.params.id }, req.body)

    res.send({ message: "The Post has been updated", UpdatePost })
})


Route.delete('/delete/:id', async (req, res) => {
    let deletePost = await AppoiModal.deleteOne({ _id: req.params.id })
    
    res.send({ message: "The Post has been deleted ", deletePost })
})



module.exports = Route