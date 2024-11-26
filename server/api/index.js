const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();

// file
const connectDB = require("../src/db/connect.db.js");

// middleware
app.use(express.json({ limit: "20kb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "20kb" }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser()); /*we are going to use cookie for verifying the user*/

//routes
app.get("/", (req, res) => {
  res.send("hii this is legalEye-AI");
});

const PORT = process.env.PORT || 7505;
(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("server is listening on http://localhost:" + PORT);
    });
  } catch (error) {
    console.log(error);
  }
})();

module.exports = app;
