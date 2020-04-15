const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name"
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration in minutes"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]

}, {toJSON:{ virtuals: true}});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout; 