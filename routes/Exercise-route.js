const express = require("express");
const ExerciseRoute = express.Router();

const {
  GetAllExerciseData,
  GetExerciseDataById,
} = require("../controller/exerciseController");

// exercise
ExerciseRoute.get("/all-exercise", GetAllExerciseData);
ExerciseRoute.get("/all-exercise/:id", GetExerciseDataById);

module.exports = { ExerciseRoute };
