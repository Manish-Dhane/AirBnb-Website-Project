if(process.env.NODE_ENV !== "production") {
require("dotenv").config();
}


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const expressSession = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");



const listingsRouter = require("./router/listing.js");
const reviewsRouter = require("./router/review.js");
const userRouter = require("./router/user.js");

const dbUrl = process.env.ATLASDB_URL;

async function main() {
  try {
      await mongoose.connect(dbUrl);
      console.log("Connected to DB");
  } catch (err) {
      console.error("Database Connection Error:", err);
  }
}
main();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate)
app.use(express.static(path.join(__dirname,'/public')));

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto:{
    secret: process.env.SECRETE;
  },
  touchAfter: 24 * 60 * 60
});

store.on("error", function(e){
  console.log("Session Store Error", e);
});

const sessionOptions = {
  store,
  secret: process.env.SECRETE,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    httpOnly: true, // Helps prevent XSS attacks
  }
};

app.use(expressSession(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user; // Make currentUser available in all templates
    next();
  }
  );

// app.get("/demouser", async (req, res)=>{
//   let fakeUser =new User({
//     username: "demouser",
//     email: "demo@gmail",
//   });
//   let registeredUser = await User.register(fakeUser, "demopassword");
//   res.send(registeredUser);
// })


// app.get("/", (req, res) => {
//   res.send("Hi, oot");
// });



app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/",userRouter);


app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not Found!!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

app.listen(3000, () => {
  console.log("server is listening to port 3000");
});