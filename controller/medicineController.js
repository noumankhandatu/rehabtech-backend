const { medicinesData } = require("../utils/medicineData");
const asyncHandler = require("express-async-handler");

const GetAllMedicines = asyncHandler(async (req, res) => {
  try {
    return res.status(200).send({ message: "Successfully Fetched Data", response: medicinesData });
  } catch (error) {
    return handleErrorResponse(res, error);
  }
});

module.exports = { GetAllMedicines };
