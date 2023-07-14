const Shop = require("../Model/shopModel");
const fs = require("fs");
const path = require("path");
const directoryPath = path.join(__dirname,"../../frontend/uploads/shops/");

const addShop = async (req, res) => {
  try {
    const { user, shopName, shopType, shopStatus,shopDescription } = req.body;
    const image = req.file;
    console.log(req.file);

    if (!user || !shopName || !shopType || !shopStatus || !image) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const shopExists = await Shop.findOne({ shopName });

    if (shopExists) {
      return res.status(400).send({ error: "Shop Already Exists" });
    }

    const createShop = await Shop.create({
      user,
      shopName,
      shopType,
      images: image.filename,
      shopDescription,
      shopStatus,
    });

    if (createShop) {
      return res.status(201).send(createShop);
    }
  } catch (error) {
    return res
      .status(400)
      .send({ error: "An error occurred while adding the shop" });
  }
};

const fetchShop = async (req, res) => {
  try {
    const getShop = await Shop.find();
    if (getShop) {
      res.status(200).send(getShop);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const singleShop = async (req, res) => {
  try {
    const shopId = req.params.id;
    const shop = await Shop.findOne({ _id: shopId });

    if (shop) {
      res.status(200).send(shop);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateShop = async (req, res) => {
  try {
    const { shopId, shopName, shopType, shopStatus,shopDescription } = req.body;

    const update = await Shop.findByIdAndUpdate(
      shopId,
      {
        shopName,
        shopType,
        shopStatus,
        shopDescription
      },
      {
        new: true,
      }
    );

    if (update) {
      res.status(201).send(update);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const removeShop = async (req, res) => {
  try {
    const shopId = req.params.id;

    const shop = await Shop.findOne({ _id: shopId });

    const removeImage = fs.unlink(directoryPath + shop.images, (err) => {
      if (err) {
        throw err;
      }
    });

    const remove = await Shop.deleteOne({ _id: shopId });

    if (remove) {
      res.status(200).send(remove);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const searchShop = async(req, res) => {
  try{
    const search = req.query.q;
    const shop = await Shop.find({shopName : { $regex : search , $options: "si" }})

    if(shop){
      res.status(200).send(shop);
    }

  }catch(error){
    res.status(400).send(error);
  }
}

module.exports = { addShop, fetchShop, singleShop, updateShop, removeShop ,searchShop};
