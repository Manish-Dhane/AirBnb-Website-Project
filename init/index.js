if(process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const MONGO_URL = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wonderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// const initDB = async () => {
//   await Listing.deleteMany({});
//   initData.data = initData.data.map((obj) =>({...obj, owner:"685c0479d532e20b48067d68",})); //assigning default owner to each data object
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");
// };

const initDB = async () => {
  await Listing.deleteMany({});

  const updatedListings = initData.data.map((obj) => ({
    ...obj,
    owner: "68a09af20a1108de866b9a7a"
  }));

  await Listing.insertMany(updatedListings);

  console.log("Database initialized");
};

initDB();