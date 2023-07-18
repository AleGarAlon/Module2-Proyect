const express = require('express');
const router = express.Router();
const Activity =require('../models/Activity.model');
const Kid =require('../models/Kid.model');
const User =require('../models/User.model');


router.get('/newKid' ,(request ,  response) =>{
    
    response.render("kids/new-kid")
    
   
})

router.post('/newKid', async(req , res) => {
        const kidInfo = req.body
        const parentInfo = req.session.user
        kidInfo.parentId = parentInfo._id
    try{
        const activities = await Activity.find({ age: { $in: kidInfo.age } });
        kidInfo.activities = activities.map(activity => activity._id);
        const newKid = await Kid.create(kidInfo)
        const parent = await User.findByIdAndUpdate(parentInfo._id, 
            { $push: { kids: newKid } }, 
            { new: true });    
        res.redirect("/profile")
   } 
   catch (error){
    console.log(error)
   }
    
})

router.get('/:kidId', async (req , res) =>{
    try{
        const kidId = req.params.kidId
        const kidDetails = await Kid.findById(kidId).populate("activities")
        res.render("kids/kid-info", {kid : kidDetails})
    }
    catch (error){
        console.log(error)
    }
})

router.get('/:kidId/update', async (req , res) =>{
    try{
        const kidId = req.params.kidId
        const kidDetails = await Kid.findById(kidId).populate("activities")
        res.render("kids/kid-update", {kid : kidDetails})
    }
    catch (error){
        console.log(error)
    }
})

router.post('/:kidId/update', async(req , res) => {
    const kidInfo = req.body
    const kidId = req.params.kidId
try{
    const activities = await Activity.find({ age: { $in: kidInfo.age } });
    kidInfo.activities = activities.map(activity => activity._id);
    const updatedKid = await Kid.findByIdAndUpdate(kidId, kidInfo, { new: true })
    
    res.redirect("/profile")
} 
catch (error){
console.log(error)
}

})

router.post("/:kidId/delete", async (req, res, next) => {
    const kidId = req.params.kidId
    console.log(kidId)
  try{
    const deletedKid = await Kid.findByIdAndDelete(kidId)
    res.redirect("/profile")
  } 
  catch (error){
  console.log(error)
  }
  })


module.exports = router;