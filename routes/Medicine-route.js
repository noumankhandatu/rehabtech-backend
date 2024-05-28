const express = require("express");
const MedicineRoute = express.Router();
const { GetAllMedicines, GetMedicineById } = require("../controller/medicineController");
const { GetAllExerciseData } = require("../controller/exerciseController");

// medicine
MedicineRoute.get("/all-medicines", GetAllMedicines);
MedicineRoute.get("/all-medicines/:id", GetMedicineById);

// exercise
MedicineRoute.get("/all-exercise", GetAllExerciseData);

module.exports = { MedicineRoute };


