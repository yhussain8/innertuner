// import mongoose
const mongoose = require('mongoose')

// setup user input schema
// User - Date - Habit - Value
// Mark - Nov1 - Mood - 3
// Mark - Nov1 - Water - 400
// Mark - Nov1 - Exercise - 45
// Mark - Nov1 - Sleep - 480
const userInputSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        inputName: {
            type: String,
            required: true
        },
        inputValue: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

// compile and export model
module.exports = mongoose.model('UserInput', userInputSchema)