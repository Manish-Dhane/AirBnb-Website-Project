const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: 
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  category: {
      type: String,
      enum: ["Trending", "Rooms", "Iconic cities", "Mountain", "Arctic", "Farms", "Castels", "Pools", "Nature-centric", "Campain"],
      required: true,
    },

  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});


listingSchema.post("findOneAndDelete", async(req,res)=>{

  if(Listing){
    await Review.deleteMany({ _id: { $in: req.listing.reviews } });
  }
})
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;