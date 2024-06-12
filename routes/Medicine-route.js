const express = require("express");
const MedicineRoute = express.Router();
const {
  GetAllMedicines,
  GetMedicineById,
} = require("../controller/medicineController");

// medicine
MedicineRoute.get("/all-medicines", GetAllMedicines);
MedicineRoute.get("/all-medicines/:id", GetMedicineById);

module.exports = { MedicineRoute };
