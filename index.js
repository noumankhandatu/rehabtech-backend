const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const { MedicineRoute } = require("./routes/Medicine-route");
const { ExerciseRoute } = require("./routes/Exercise-route");

app.use(cors());
app.use(express.json());

// cookie parser for cookies
app.use(cookieParser());
// Sample medicine data
app.use("/api/v1", MedicineRoute, ExerciseRoute);

app.get("/", (req, res) => {
  return res.send("Very well , Api`s are up and running ");
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
