const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// const mongoose = require("mongoose");
const Router = require("./routes/products")
app.use(Router);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use(require("./routes/products"));
// get driver connection
const db = require("./db/connector");

app.listen(port, () => {
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("MongoDB Connected successfully");
  });
  // perform a database connection when server starts
  // dbo.connectToServer(function (err) {
  //   if (err) console.error(err);

  // });
  console.log(`Server is running on port: ${port}`);
});