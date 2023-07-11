const Review = require("../Model/reviewModel");

const addReview = async(req, res) => {
  try {
    const { userId, productId, review, rating } = req.body;
    if (!userId || !productId) {
      return res.status(400).send({ error: "All Fields are required" });
    }

    const reviewExists = await Review.findOne({ userId, productId });
    if (reviewExists) {
      const reviewId = reviewExists._id;
      return updateReview(req, res, reviewId, review, rating);
    }

    let createReview = {
      user: userId,
      product: productId,
      productReview: review,
      productRating: rating,
    };

    const newreview = await Review.create(createReview);

    if (newreview) {
      res.status(201).send(newreview);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateReview = async (req, res, reviewId, review, rating) => {
  try {
    const updateReview = await Review.findByIdAndUpdate(
      reviewId,
      {
        productReview: review,
        productRating: rating,
      },
      { new: true }
    );
    if (updateReview) {
      res.status(201).send(updateReview);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const removeReview = async (req, res) => {
  try {
    const  reviewId = req.params.id;
    const remove = await Review.deleteOne({ _id: reviewId });

    if (remove) {
      res.status(200).send(remove);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const singleProductReview = async (req, res) => {
  try {
    const productId = req.params.id;
    const reviews = await Review.find({product:productId});

    if(reviews){
        res.status(200).send(reviews);
    } 

  } catch (error) {
    return res.status(400).send(error);
  }
};

const singleReview = async(req, res) => {
    try {
      const  reviewId  = req.params.id;
      const reviews = await Review.findOne({ _id: reviewId });
      if (reviews) {
        res.status(200).send(reviews);
      }
    } catch (error) {
      return res.status(400).send(error);
    }
}

module.exports = { addReview, removeReview, singleProductReview,singleReview };
