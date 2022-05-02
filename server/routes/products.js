const express = require("express");

const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
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

productRoutes.post('/image/upload', upload.single('productImage'), function (req, res) {
    console.log(req.file)
    res.json({
        message: true,
        path: req.file.path
    })
})


// productRoutes.route("/image/upload").post((req, res) => {

//     const unique_id = uuidv4();

//     var name = "image_" + unique_id + ".png";
//     var storage = multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, `../public`);
//         },
//         filename: function (req, file, cb) {
//             cb(null, name);
//         }
//     });

//     var upload = multer({ storage: storage }).single('file');
//     upload(req, res, error => {
//         console.log(req.file);
//         if (error) {
//             console.log(error);
//             return res.json(error);
//         }
//         res.json({
//             message: true,
//             path: name
//         })
//     })
// });

// if (req.files === null) {
//     return res.status(400).json({ msg: 'No file uploaded' });
// }

// console.log(req.body);
// console.log(req.body.file);
// const file = req.files.file;
// // console.log(file);

// file.mv(`${__dirname}/client/public/assets/image_${unique_id}.png`, err => {
//     if (err) {
//         console.error(err);
//         return res.status(500).send(err);
//     }

//     res.status(200).json({ uploaded: true, filePath: `/assets/image_${unique_id}.png` });
// });

module.exports = productRoutes;