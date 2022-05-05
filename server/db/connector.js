const mongoose = require("mongoose");
const Db = process.env.ATLAS_URI;

mongoose.connect(Db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

module.exports = db;