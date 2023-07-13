const Order = require("../Model/orderModel");
const Cart = require("../Model/cartModel");
const Product = require("../Model/productModel");

const addOrder = async (req, res) => {
  try {
    const { userId, status } = req.body;
    const cartProducts = await Cart.find({ user: userId });
    let orderProduct = [];

    cartProducts.forEach((product) => {
      orderProduct.push(product);
    });
    
    const removeQuantity = cartProducts.map(async (product) => {
      const findProduct = await Product.findOne({
        _id: product.cartProduct,
      });
      const updateQuantity = findProduct.quantity - product.productQuantity;

      const updateProduct = await Product.findOneAndUpdate(
        { _id: findProduct._id },
        { quantity: updateQuantity },
        { new: true }
      );
    });

    let createOrder = {
      user: userId,
      orderProducts: orderProduct,
      orderStatus: status,
    };

    if (createOrder && orderProduct.length > 0) {
      const neworder = await Order.create(createOrder);
      if (neworder) {
        res.status(201).send(neworder);
      }
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const userOrder = async (req, res) => {
  try {
    const userId = req.params.id;

    const orderProduct = await Order.find({ user: userId });

    if (orderProduct) {
      res.status(200).send(orderProduct);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const singleOrder = async (req, res) => {
  try {
    const orderId = req.params.id;

    const orderProduct = await Order.findOne({ _id: orderId });

    if (orderProduct) {
      res.status(200).send(orderProduct);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const allOrders = async (req, res) => {
  try {
    const orderProducts = await Order.find();
    if (orderProducts) {
      res.status(200).send(orderProducts);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateOrder = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    const updateOrder = await Order.findByIdAndUpdate(orderId, {
      orderStatus: status,
    },{new:true,});
    if (updateOrder) {
      res.status(200).send(updateOrder);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};


module.exports = { addOrder, userOrder, singleOrder, allOrders, updateOrder };
