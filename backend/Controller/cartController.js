const Cart = require("../Model/cartModel");
const Product = require("../Model/productModel");

const addCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || !quantity) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const productExists = await Cart.findOne({
      user: userId,
      cartProduct: productId,
    });

    if (productExists) {
      return updateCart(req, res, userId, productId, quantity);
    }

    const createCart = {
      user: userId,
      cartProduct: productId,
      productQuantity: quantity,
    };

    const cart = await Cart.create(createCart);

    if (cart) {
      res.status(201).send(cart);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateCart = async (req, res, userId, productId, quantity) => {
  try {
    const product = await Product.findOne({ _id: productId });
    const cartProduct = await Cart.findOne({
      user: userId,
      cartProduct: productId,
    });

    const updateQuantity = cartProduct.productQuantity + quantity;

    if (updateQuantity <= product.quantity && updateQuantity > 0) {
      const update_cart = await Cart.findOneAndUpdate(
        {
          user: userId,
          cartProduct: productId,
        },
        { productQuantity: updateQuantity },
        {
          new: true,
        }
      );
      if (update_cart) {
        res.status(200).send(update_cart);
      } else {
        return res.status(404).send({ error: "Cart product not found" });
      }
    } else {
      return res.send({ error: "out of stock" });
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const userCart = async (req, res) => {
  try {
    const userId = req.params.userId;

    const cartProducts = await Cart.find({ user: userId });

    if (cartProducts) {
      res.status(200).send(cartProducts);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateQuantity = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    updateCart(res, res, userId, productId, quantity);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const removeCart = async (req, res) => {
  try {
    const cartId = req.params.id;

    const removeProduct = await Cart.deleteOne({ _id: cartId });
    if (removeProduct) {
      res.status(200).send(removeProduct);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = { addCart, userCart, updateQuantity, removeCart };
