const express = require('express');
const router = express.Router();
const { isLoggedIn, isAdmin } = require('../middlewares/route-guard.middleware')
const Activity =require('../models/Activity.model');
const Kid =require('../models/Kid.model');
const User =require('../models/User.model');
const Article =require('../models/Article.model');


router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/profile", isLoggedIn, async (req, res, next) => {
  const parentInfo = req.session.user
  const kidsInfo = await Kid.find( { parentId: parentInfo._id })
  res.render("profile", { user: req.session.user , kids : kidsInfo});
});


router.get("/about-us", (req, res, next) => {
  res.render("about-us");
});

router.get("/articles", async (req, res, next) => {
  const articlesInfo = await Article.find()
 res.render("articles", {articles : articlesInfo});
});

router.post("/articles", async (req, res, next) => {
  const articleInfo = req.body
  console.log(articleInfo)
  const articlesInfo = await Article.find({ month: articleInfo.month, year : articleInfo.year })
 console.log(articlesInfo)
  res.render("articles", {articles : articlesInfo});
});

router.get('/:userId/update',isLoggedIn, async (req , res) =>{
  try{
      const userId = req.params.userId
      const userDetails = await User.findById(userId)
      res.render("profile-update", {user : userDetails})
  }
  catch (error){
      console.log(error)
  }
})

router.post("/:userId/update",isLoggedIn, async (req, res, next) => {
  const userInfo = req.body
  const userId = req.params.userId
try{
  
  const updatedProfile = await User.findByIdAndUpdate(userId, userInfo, { new: true })
  
  res.redirect("/profile")
} 
catch (error){
console.log(error)
}

})


router.get('/logout',isLoggedIn, (req, res, next) => {
  console.log(req.session)
  req.session.destroy((err) => {
      if (err) {
        console.log(err);
      }
      res.redirect("/");
    });
}); 
/*router.post("/:userId/delete", async (req, res, next) => {
  const userId = req.params.userId
  console.log(userId)
try{
  const newKid = await User.findByIdAndDelete(userId)
  res.redirect("/profile")
} 
catch (error){
console.log(error)
}

})*/


module.exports = router;
