const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.route");
connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.use("/users", userRoutes);

module.exports = app;
