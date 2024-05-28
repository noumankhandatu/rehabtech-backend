const { exerciseData } = require("../utils/medicineData");
const asyncHandler = require("express-async-handler");

const GetAllExerciseData = asyncHandler(async (req, res) => {
    try {
        return res.status(200).send({ message: "Successfully Fetched Data", response: exerciseData });
    } catch (error) {
        return handleErrorResponse(res, error);
    }
});


module.exports = { GetAllExerciseData };
