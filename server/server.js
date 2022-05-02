const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true}));
// app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static('public'));

app.use(require("./routes/products"));
// get driver connection
const dbo = require("./db/connector");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});