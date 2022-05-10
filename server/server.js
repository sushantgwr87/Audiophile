const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./.env" });

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const Routes = require("./routes/products")
app.use(Routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// get driver connection
const db = require("./db/connector");

app.listen(port, () => {
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("MongoDB Connected successfully");
  });
  console.log(`Server is running on port: ${port}`);
});