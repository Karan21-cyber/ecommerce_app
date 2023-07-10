const Product = require("../Model/productModel");

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
      images,
      productStatus,
      colors,
      type,
      mall,
    } = req.body;

    if (
      !productName ||
      !category ||
      !shop ||
      quantity ||
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
      colors,
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
      images,
      productStatus,
      colors,
      mall,
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
        images,
        productStatus,
        colors,
        mall,
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

      const product = await Product.deleteOne({ _id: productId });

      if (product) {
        res.status(200).send(product);
      }
    } catch (error) {
      return res.status(400).send(error);
    }
}

module.exports = { addProduct, fetchAll, singleProduct,removeProduct,updateProduct};
