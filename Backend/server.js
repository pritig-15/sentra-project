const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const incidentRoutes = require("./routes/incidentRoutes");

app.use("/api/incidents", incidentRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB error:", err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
