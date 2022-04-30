const express = require("express");

// productRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const productRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/connector");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// const collectionName = "products";

// This section will help you get a list of all the records.
productRoutes.route("/product/:category").get(function (req, res) {
    let db_connect = dbo.getDb("audiophile");
    let collectionName = req.params.category;
    console.log(collectionName)
    db_connect
        .collection(collectionName)
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you get a single record by id
productRoutes.route("/product/:category/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let collectionName = req.params.category;
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection(collectionName)
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you create a new record.
productRoutes.route("/product/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
    };
    db_connect.collection(collectionName).insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

// This section will help you update a record by id.
productRoutes.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        $set: {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        },
    };
});

// This section will help you delete a record
productRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection(collectionName).deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});

module.exports = productRoutes;