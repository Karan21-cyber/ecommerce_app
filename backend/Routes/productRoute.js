// import necessary files or packages or functions
const express = require("express");
const path = require("path");
const multer = require("multer");

const { fetchAll, singleProduct, updateProduct, removeProduct, addProduct, searchProduct } = require("../Controller/productController");
const router = express.Router();

// it is for saving the file in destination directory with their file name
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null , path.join(__dirname ,"../../frontend/uploads/products"))
    },
    filename:function(req,file,cb){
        cb(null, file.originalname);
    }
})

const upload = multer({storage:storage});

// this is route for an api
router.route("/").get(fetchAll);
router.route("/addproduct").post(upload.array("images",10),addProduct);
router.route("/singleProduct/:id").get(singleProduct);
router.route("/update").put(updateProduct);
router.route("/remove/:id").delete(removeProduct);
router.route("/search").get(searchProduct);

module.exports = router;