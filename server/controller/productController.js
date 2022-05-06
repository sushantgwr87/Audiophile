const productSchema = require("../model/productSchema");
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const getAllProducts = (req, res) => {
    productSchema.find({ category: req.params.category }, function (err, data) {
        if (err) {
            res.json({ status: false, error: err });
        }
        // console.log(data)
        res.json({ status: true, data });
    });
}

const featuredProducts = async (req, res) => {
    productSchema.find({ isFeatured: { $eq: true } }, function (err, data) {
        if (err) {
            res.json({ status: false, error: err });
        }
        res.json({ status: true, data });
    });
}

const getProduct = (req, res) => {
    productSchema.findOne({ _id: ObjectId( req.params.id ) }, function (err, data) {
        if (err) {
            res.json({ status: false, error: err });
        }
        // console.log(data)
        res.json({ status: true, data });
    });
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
            status: false,
        })
    }
    else {
        res.json({
            status: true,
            path: req.file.filename
        })
    }
}

module.exports = { getAllProducts, getProduct, featuredProducts, uploadImage, addProduct }