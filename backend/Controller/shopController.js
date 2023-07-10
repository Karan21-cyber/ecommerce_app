const Shop = require("../Model/shopModel");

const addShop = async (req, res) => {
  try {
    const { userId, shopName, shopType, images, status } = req.body;

    if (!userId | !shopName || !shopType || !status) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const shopExists = await Shop.find({ shopName });

    if (shopExists) {
      return res.status(400).send({ error: "Shop Already Exists" });
    }

    const createShop = await Shop.create({
      user: userId,
      shopName: shopName,
      shopType: shopType,
      images: images,
      shop_status: status,
    });

    if (createShop) {
      res.status(201).send(createShop);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const fetchShop = async(req, res) => {
    try{
        const getShop = await Shop.find();
        if(getShop){
            res.status(200).send(getShop);
        }
    }catch(error){
        return res.status(400).send(error);
    }
}

const singleShop = async(req, res) => {
     try {
       const shopId = req.params.id;
       const shop = await Shop.findOne({ _id: shopId });

       if (shop) {
         res.status(200).send(shop);
       }
     } catch (error) {
       return res.status(400).send(error);
     }
}

const updateShop = async (req, res) => {
  try {
    const { shopId, shopName, shopType, images, status } = req.body;

    const update = await Shop.findByIdAndUpdate(
      shopId,
      {
        shopName: shopName,
        shopType: shopType,
        images: images,
        shop_status: status,
      },
      {
        new: true,
      }
    );

    if (createShop) {
      res.status(201).send(update);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const removeShop = async (req, res) => {
  try {
    const shopId = req.params.id;
    const remove = await Shop.deleteOne({ _id: shopId });

    if (remove) {
      res.status(200).send(remove);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = { addShop , fetchShop, singleShop, updateShop, removeShop };
