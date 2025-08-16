const express = require("express");
const router = express.Router({mergeParams: true});
const {listingSchema , reviewSchema} = require("../schema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");
const ExpressError = require("../utils/ExpressError");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controller/listing.js");
const multer = require("multer");
const { cloudinary, storage } = require("../cloudConfig.js");
const upload = multer({ storage}); // Set the destination for uploaded files


router.route("/")
  .get(listingController.index)  // Index Route
  .post(isLoggedIn,  
    upload.single('listing[image]'), 
    validateListing, 
    wrapAsync(listingController.createListing));  // Create Route
  

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingController.showListing))  // Show Route
    .put(isLoggedIn, isOwner,upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))  // Update Route
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));  // Delete Route

// //Index Route
// router.get("/", wrapAsync(listingController.index));


// //Show Route
// router.get("/:id", wrapAsync(listingController.showListing));


// //Create Route
// router.post("/", isLoggedIn, validateListing, wrapAsync(listingController.createListing));


//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

// //Update Route
// router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing));

// //Delete Route
// router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

router.get('/', listingController.index);
// Route to show listings by category
router.get('/category/:category', listingController.listingsByCategory);

module.exports = router;
