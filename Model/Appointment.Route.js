const mongoose=require('mongoose')

const AppointmentSchema=mongoose.Schema({
        name: { type: String, required: true },
        image: { type: String, required: true },
        specialization: { type: String, required: true },
        experience: { type: String, required: true },
        location: { type: String, required: true },
        date: { type: String, required: true },
        slots: { type: String, required: true },
        fee: { type: String, required: true }
    
})

const Appointment=mongoose.model("Doctors_Appointment", AppointmentSchema)

module.exports=Appointment