const Product = require("../Model/productModel");
const fs = require("fs");
const path = require("path");
const directoryPath = path.join(__dirname, "../../frontend/uploads/products/");


// type is for male female , kids, baby, and many more
const addProduct = async (req, res) => {
  try {
    const {
      productName,
      category,
      shop,
      discount,
      offer,
      description,
      quantity,
      productPrice,
      productStatus,
      type,
      mall,
    } = req.body;
    
    const images = req.files.map((file) => file.filename);
    
    console.log(images);

    if (
      !productName ||
      !category ||
      !shop ||
      !quantity ||
      !productPrice ||
      !productStatus ||
      !images ||
      !description
    ) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const productExists = await Product.findOne({ productName });

    if (productExists) {
      return res.status(400).send({ error: "Product Already Exists" });
    }

    const createProduct = await Product.create({
      productName,
      category,
      shop,
      discount,
      offer,
      description,
      quantity,
      productPrice,
      images,
      productStatus,
      type,
      mall,
    });

    if (createProduct) {
      res.status(201).send(createProduct);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const fetchAll = async (req, res) => {
  try {
    const products = await Product.find();

    if (products) {
      res.status(200).send(products);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};


const singleProduct= async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findOne({_id:productId});

    if (product) {
      res.status(200).send(product);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};


const updateProduct = async (req, res) => {
  try {
    const {
      productId,
      productName,
      category,
      discount,
      offer,
      description,
      quantity,
      productPrice,
      productStatus,
      mall,
      type,
    } = req.body;

    const product = await Product.findByIdAndUpdate(
      productId,
      {
        productName,
        category,
        discount,
        offer,
        description,
        quantity,
        productPrice,
        productStatus,
        mall,
        type,
      },
      {
        new: true,
      }
    );
    if (product) {
      res.status(200).send(product);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const removeProduct = async(req, res) => {
    try {
      const productId = req.params.id;

      const product = await Product.findOne({_id:productId});
      
      const deleteImage = product.images.map((imageName) => fs.unlink(directoryPath + imageName,(err) =>{
        if(err){
          throw err;
        }
      }));
      
      const deleteProduct = await Product.deleteOne({ _id: productId });

      if (deleteProduct) {
        res.status(200).send(deleteProduct);
      }
    } catch (error) {
      return res.status(400).send(error);
    }
}

const searchProduct = async(req, res) => {
  try{
    const search = req.query.q;

    const product = await Product.find({
      productName : {$regex : search , $options : "si"}
    });
    res.send(product);
  }
  catch(error){
    return res.status(400).send(error);
  }
}

module.exports = { addProduct, fetchAll, singleProduct,removeProduct,updateProduct,searchProduct};
