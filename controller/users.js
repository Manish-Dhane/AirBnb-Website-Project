const User = require("../models/user.js");


module.exports.rendersignupForm = (req, res) => {
    res.render("users/signup.ejs");
}

module.exports.signup = async (req, res, next) => { // Correct usage
    try {
        let { email, username, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) =>{
            if (err){
                return next(err);
            }
             req.flash("success", "Successfully signed up! Welcome To Wonderlust!");
            res.redirect("/listings"); // Use redirectUrl if set, otherwise default to /listings
        })
       
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.login = async (req, res) => { 
        req.flash("success", "Welcome back!");
        res.redirect(res.locals.redirectUrl || "/listings");
}

module.exports.logout = (req,res)=>{
    req.logout((err)=>{
        if (err) {
            return next(err);
        }
        req.flash("success", "You Logged out successfully!");
        res.redirect("/listings");
    })
}