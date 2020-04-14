const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: function() {
            new Date();
        }
    },
    exercises: [{
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
    }]

}, {toJSON:{ virtuals: true}});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout; 