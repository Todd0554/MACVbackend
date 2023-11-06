import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    day:{
        type: String,
        require: true
    },
    date:{
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true,
    },
    cost: {
        type: String,
        required: true,
        default: "free"
    }
},{
    timestamps: true
})

const Course = mongoose.model('Course', courseSchema)

export default Course