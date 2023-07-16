const express = require('express');
const router = express.Router();
const { isLoggedIn, isAdmin } = require('../middlewares/route-guard.middleware')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET profile page */
router.get("/profile", isLoggedIn, (req, res, next) => {
  console.log(req.session.user)
  res.render("profile", { user: req.session.user });
});

/* GET about page */
router.get("/about-us", isLoggedIn, (req, res, next) => {
  console.log(req.session.user)
  res.render("about-us", { user: req.session.user });
});

/* GET articles page */
router.get("/articles", (req, res, next) => {
  console.log(req.session.user)
  res.render("articles", { user: req.session.user });
});



module.exports = router;

