const Wishlist = require("../Model/whishlistModel");

const addWishlist = async (req, res) => {
  try {
    const {userId, productId} = req.body;
    if(!userId || !productId){
        return res.status(400).send({"error":"All fields are required"});
    }

    const producExists = await Wishlist.findOne({
      user: userId,
      wishlistProduct:productId,
    });

    if(producExists){
        return res.status(400).send({"error":"Product Already Exists"});
    }

    const createWishlist = {
      user: userId,
      wishlistProduct: productId,
    };
    
    const wishlist = await Wishlist.create(createWishlist);

    if(wishlist){
        return res.status(200).send(wishlist);
    }

  } catch (error) {
    return res.status(400).send(error);
  }
};

const userWishlist = async (req, res) => {
  try {
    const userId = req.params.userId;

    const wishlistProducts = await Wishlist.find({ user: userId });

    if (wishlistProducts) {
      res.status(200).send(wishlistProducts);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const removeWishlist = async (req, res) => {
  try {
    const wishlistId = req.params.id;

    const removeProduct = await Wishlist.deleteOne({ _id: wishlistId });
    if (removeProduct) {
      res.status(200).send(removeProduct);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = { addWishlist, removeWishlist, userWishlist };
