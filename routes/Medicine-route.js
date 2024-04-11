const express = require("express");
const MedicineRoute = express.Router();
const { GetAllMedicines } = require("../controller/medicineController");

MedicineRoute.get("/all-medicines", GetAllMedicines);

module.exports = { MedicineRoute };
