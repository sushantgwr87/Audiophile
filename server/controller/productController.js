// const db = require("../db/connector");
const productSchema = require("../model/productSchema");
// This help convert the id from string to ObjectId for the _id.
// const ObjectId = require("mongodb").ObjectId;
// const mongoose = require("mongoose");

const getAllProducts = (req, res) => {
    // const db = mongoose.connection.db;
    // let db_connect = mongoose.connection.db;
    // db_connect
    //     .collection(collectionName)
    //     .find({ "category": req.params.category })
    //     .toArray(function (err, result) {
    //         if (err) throw err;
    //         res.json(result);
    //     });
}

const getAllFeaturedProducts = (req, res) => {
    console.log("Featured")
    console.log("Featured")
    // let db_connect = dbo.db;
    // db_connect
    //     .collection(collectionName)
    productSchema.find({ isFeatured: { $ne: false } }, function(err,data){
        if(err){
            res.json({success: false, error: err});
        }
        console.log(data)
        res.json({success: true, data});
    });
    // .toArray(function (err, result) {
    //     if (err) throw err;
    //     res.json(result);
    // });
}

const getProduct = (req, res) => {
    // let db_connect = dbo.getDb();
    // let collectionName = req.params.category;
    // let myquery = { _id: ObjectId(req.params.id) };
    // db_connect
    //     .collection(collectionName)
    //     .findOne(myquery, function (err, result) {
    //         if (err) throw err;
    //         res.json(result);
    //     });
}

const addProduct = (req, res) => {
    const productData = new productSchema({
        title: req.body.title,
        longTitle: req.body.title + " " + req.body.category,
        quote: req.body.quote || null,
        caption: req.body.caption,
        description: req.body.description,
        price: req.body.price,
        path: req.body.path,
        isFeatured: req.body.feature,
        category: req.body.category,
    });
    productData.save().then(
        res.json({
            status: true,
        })
    ).catch((error) => {
        console.log(error)
        res.json({
            status: false,
        })
    }
    )
}

const uploadImage = (req, res) => {
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
}

module.exports = { getAllProducts, getProduct, getAllFeaturedProducts, uploadImage, addProduct }