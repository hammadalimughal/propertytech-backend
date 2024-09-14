const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    
    id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
    },
    contact: {
        type: String
    }
})

const Student = mongoose.model('student', studentSchema);
module.exports = Student