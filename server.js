const express = require("express");
const cors = require("cors");
const { medicinesData } = require("./utils/medicineData");
const app = express();
const cookieParser = require("cookie-parser");
const { MedicineRoute } = require("./routes/Medicine-route");

app.use(cors());
app.use(express.json());

// cookie parser for cookies
app.use(cookieParser());
// Sample medicine data
app.use("/api/v1", MedicineRoute);

const port = 8000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
