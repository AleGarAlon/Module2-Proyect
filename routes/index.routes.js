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
  const kidsInfo = await Kid.find( { parentId: parentInfo._id })
  console.log(parentInfo)
  console.log(kidsInfo)
  res.render("profile", { user: req.session.user , kids : kidsInfo});
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
