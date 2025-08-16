const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAPBOX_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });



module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
  const { id } = req.params; // req.params should contain id
  if (!id) {
      throw new ExpressError(400, "Invalid Listing ID");
  }
  // const listing = await Listing.findById(id)
  //     .populate({
  //       path: "reviews",
  //       populate: {
  //         path: "author"
  //       }
  //     });
  const listing = await Listing.findById(req.params.id)
  .populate('owner') // <-- this is important!
  .populate({
    path: 'reviews',
    populate: { path: 'author' }
  });
  if (!listing) {
      // throw new ExpressError(404, "Listing Not Found");
      req.flash("error", "Listing does not exist!");
      res.redirect("/listings");
  }
   console.log(listing);
  res.render("listings/show.ejs", { listing });
}

module.exports.createListing = async (req, res, next) => {
   let responce = await geocodingClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1
  })
  .send()
  

  let url = req.file.path; // Get the file path from the uploaded file
  let filename = req.file.filename; // Get the filename from the uploaded file
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id; // Assign the owner to the logged-in user
  newListing.image = { url, filename }; // Set the image field with the file path and filename 
  newListing.geometry = responce.body.features[0].geometry; // Set the geometry field with the geocoding response
  await newListing.save();
  req.flash("success", "Successfully created a new listing!");
  res.redirect("/listings");
}

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
   if (!listing) {
      req.flash("error", "Listing does not exist!");
      res.redirect("/listings");
   }

   let currImage = "";
    if (listing.image && listing.image.url) {
      currImage = listing.image.url.replace("/upload", "/upload/c_thumb,g_face,h_200,w_200");
    }
    res.render("listings/edit.ejs", { listing, currImage });
}
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  // Remove image from req.body.listing if no new file is uploaded
  if (!req.file) {
    delete req.body.listing.image;
  }

  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });

  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Successfully updated the listing!");
  res.redirect(`/listings/${id}`);
}
module.exports.deleteListing = async (req, res, next) => {
  let { id } = req.params;
  
  // First, check if the listing exists
  const listing = await Listing.findById(id);
  
  if (!listing) {
    return next(new ExpressError(404, "Listing Not Found"));
  }

  // If listing exists, check if it has reviews
  if (listing.reviews && listing.reviews.length > 0) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }

  // Delete the listing
  await Listing.findByIdAndDelete(id);

  console.log("Deleted listing:", listing);
  req.flash("success", "Successfully deleted a listing!");
  res.redirect("/listings");
}

module.exports.listingsByCategory = async (req, res) => {
  const { category } = req.params;
  // Case-insensitive search for category
  const allListings = await Listing.find({ category: { $regex: new RegExp(category, "i") } });
  res.render("listings/index.ejs", { allListings, selectedCategory: category });
}