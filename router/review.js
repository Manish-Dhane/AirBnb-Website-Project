const express = require("express");
const router = express.Router({mergeParams: true}); // here we used mergeparams true to send the id from parent route to this route without it it cannot detect the id and gives undefined when we do id related works
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controller/review.js");

  
  //Reviews
  //post route--
  router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));
  
  //delete route--
  router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));

  module.exports = router;