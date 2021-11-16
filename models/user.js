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
    }
)

// setup user schema
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true
        },
        email: {
            type: String,
            unique: true,
            trim: true, // trims whitespace if your user types something like " alex@123.com " into "alex@123.com"
            lowercase: true,
            required: true
        },
        password: {
            type: String,
            trim: true,
            minLength: 3,
            required: true
        },
        userInputs: [userInputSchema]
    }, 
    {
        timestamps: true,
        
        // A cool mongoose trick to not send passwords to clients! (even though they'll be hashed)
        toJSON: {
            transform: function(doc, ret) {
                delete ret.password
                return ret
            }
        }
    }
)

// compile and export model
module.exports = mongoose.model('User', userSchema)