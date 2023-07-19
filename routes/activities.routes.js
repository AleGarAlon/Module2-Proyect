const express = require('express');
const router = express.Router();
const uploader = require("../config/cloudinary.config.js");
const Activity =require('../models/Activity.model');
const { isAdmin } = require('../middlewares/route-guard.middleware')

router.get("/activities", async (req, res, next) => {
    const allActivities =  await Activity.find()
    res.render("activities/activities", {activities : allActivities});
});

router.get('/create',isAdmin , (req ,  res) =>{
    res.render("activities/new-activity")
    
})

router.post('/create',uploader.single("imageUrl"), async(req , res) => {
    try{
    let activityInfo = req.body
    activityInfo.materials = activityInfo.materials.split(",");
    activityInfo.skills = activityInfo.skills.split(",");
    activityInfo.steps = activityInfo.steps.split(",");
    if (req.file) {
        activityInfo.image = req.file.path;
      }
    const newActivity = await Activity.create(activityInfo)
    res.redirect("/activities/activities")
   } catch (error){
    console.log(error)
   }  
})

router.get('/:activityId', async (req , res) =>{
    try{
        const activityId = req.params.activityId
        const activityDetails = await Activity.findById(activityId)
        res.render("activities/activity-details", {activity : activityDetails})
    }
    catch (error){
        console.log(error)
    }
})

router.get('/:activityId/update', async (req , res) =>{
    try{
        const activityId = req.params.activityId
        const activityDetails = await Activity.findById(activityId)
        res.render("activities/activity-update", {activity : activityDetails})
    }
    catch (error){
        console.log(error)
    }
})

router.post('/:activityId/update',uploader.single("imageUrl"), async(req , res) => {
    const activityId = req.params.activityId
    try{
    let activityInfo = req.body
    activityInfo.materials = activityInfo.materials.split(",");
    activityInfo.skills = activityInfo.skills.split(",");
    activityInfo.steps = activityInfo.steps.split(",");
    if (req.file) {
        activityInfo.image = req.file.path;
      }
    const updateActivity = await Activity.findByIdAndUpdate(activityId, activityInfo, { new: true })
    res.redirect("/activities/activities")
   } catch (error){
    console.log(error)
   }  
})

router.post("/:activityId/delete", async (req, res, next) => {
    const activityId = req.params.activityId
    console.log(activityId)
  try{
    const deletedActivity = await Activity.findByIdAndDelete(activityId)
    res.redirect("/activities/activities")
  } 
  catch (error){
  console.log(error)
  }
  })


module.exports = router;