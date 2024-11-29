const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser")
app.use(cors());
const connectToDb = require("./db/db");

const userRoutes = require("./routes/user.route");
const captainRoutes = require("./routes/captain.routes")
connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.use("/users", userRoutes);
app.use("/captains",captainRoutes)

module.exports = app;
