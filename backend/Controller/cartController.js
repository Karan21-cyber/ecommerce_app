const Cart = require("../Model/cartModel");
const Product = require("../Model/productModel");

const addCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || !quantity) {
      return res.status(400).send({ error: "All Fileds are required" });
    }

    const productExists = await Cart.findOne({ userId, productId });

    if (productExists) {
      const updateCart = updateCart(userId, productId, quantity);
    }

    const createCart = await Cart.createCart({
      user: userId,
      cartProduct: productId,
      productQuantity: quantity,
    });

    if (createCart) {
      res.status(201).send(createCart);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateCart = async (userId, productId, quantity) => {
  try {
    
  } catch (error) {
    return error;
  }
};

module.exports = { addCart };
