const express = require('express');

const router = express.Router();

const Workout = require("../models/workouts.js");

router.get("/api/workouts", (req,res) => {
    Workout.find()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json(error);
        });
})



router.put("/api/workouts/:id", ({body, params},res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercises:body}}, { new: true} )
        .then((data) => {
            console.log("query executed");
            console.log(data);
            res.json(data);

        })
        .catch((error) => {
            res.json(error);
        });
})

module.exports = router;