const express = require("express");
const router = express.Router();

const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const productController = require("../controller/productController");

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


// router.get("/product/:category", productController.getAllProducts);
router.get("/product/featured", productController.featuredProducts);
// router.get("/product/:id", productController.getProduct);

router.post("/product/add", productController.addProduct);
router.post("/image/upload", upload.single('productImage'), productController.uploadImage);

module.exports = router;