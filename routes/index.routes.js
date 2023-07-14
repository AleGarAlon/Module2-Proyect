const express = require('express');
const router = express.Router();
const { isLoggedIn, isAdmin } = require('../middlewares/route-guard.middleware')
const Activity =require('../models/Activity.model');
const Kid =require('../models/Kid.model');
const User =require('../models/User.model');

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET profile page */
router.get("/profile", isLoggedIn, async (req, res, next) => {
  const parentInfo = req.session.user
  
  
  res.render("profile", { user: req.session.user });
});
module.exports = router;

router.get("/about-us", (req, res, next) => {
  
  res.render("about-us");
});


module.exports = router;