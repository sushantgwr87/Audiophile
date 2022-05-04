const express = require("express");

const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This will help us connect to the database
const dbo = require("../db/connector");
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const collectionName = "products";

// This section will help you get a list of all the records.
router.route("/product/:category").get(function (req, res) {
    let db_connect = dbo.getDb("audiophile");
    db_connect
        .collection(collectionName)
        .find({"category":req.params.category})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

router.route("/product/featured").get(function (req, res) {
    let db_connect = dbo.getDb("audiophile");
    db_connect
        .collection(collectionName)
        .find({isFeatured: {$ne: false}})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you get a single record by id
router.route("/product/:id").get(function (req, res) {
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


// This section will help you update a record by id.
router.route("/update/:id").post(function (req, response) {
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
router.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection(collectionName).deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});

// Admin auth
router.post("/admin/auth", (req, res) => {
    const username = req.body.user;
    const password = req.body.password;
});

// This section will help you create a new record.
router.post("/product/add", function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        title: req.body.title,
        longTitle: req.body.title + req.body.category,
        quote: req.body.quote || null,
        description: req.body.description,
        price: req.body.price,
        path: req.body.path,
        isFeatured: req.body.feature,
        category: req.body.category,
    };
    db_connect.collection(collectionName).insertOne(myobj, function (err, res) {
        if (err) {
            response.json({
                status: false,
            })
            throw err;
        }
        else {
            response.json({
                status: true,
            })
        }
    });
});

// var name;
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public');
    },
    filename: function (req, file, cb) {
        const unique_id = uuidv4();
        let name = "image_" + unique_id + ".png";
        cb(null, name);
    }
});
var upload = multer({ storage: storage });

router.post('/image/upload', upload.single('productImage'), function (req, res) {
    console.log(req.file)
    if (!req.file) {
        console.log("No file received");
        res.json({
            message: false,
        })
    }
    else {
        res.json({
            message: true,
            path: req.file.filename
        })
    }
})

module.exports = router;