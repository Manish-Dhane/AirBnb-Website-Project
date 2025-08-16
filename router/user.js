const express = require("express");
const router = express.Router();
const User = require("../models/user.js"); // Fixed typo
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { isLoggedIn } = require("../middleware.js");
const { saveRedirectedUrl } = require("../middleware.js"); // Ensure this is imported correctly

const userController = require("../controller/users.js");

router.route("/signup")
  .get(userController.rendersignupForm) // Render signup form
  .post(wrapAsync(userController.signup)); // Handle signup

router.route("/login")
  .get(userController.renderLoginForm) // Render login form
  .post(saveRedirectedUrl, passport.authenticate("local", {
    failureRedirect: '/login',
    failureFlash: true
  }), userController.login); // Handle login


router.get("/logout", userController.logout);

module.exports = router;