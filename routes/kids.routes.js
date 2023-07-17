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
        console.log(kidInfo)
    try{
        const activities = await Activity.find({ age: { $in: kidInfo.age } });
        kidInfo.activities = activities.map(activity => activity._id);
       
        console.log(kidInfo);
        const newKid = await Kid.create(kidInfo)
        const parent = await User.findByIdAndUpdate(parentInfo._id, 
            { $push: { kids: newKid } }, 
            { new: true });
        console.log(parent)    
        res.redirect("/profile")
   } 
   catch (error){
    console.log(error)
   }
    
})

router.get('/:kidId', async (req , res) =>{
    try{
        const kidId = req.params.kidId
        console.log(kidId)
        const kidDetails = await Kid.findById(kidId)
        console.log(kidDetails)
        res.render("kids/kid-info", {kid : kidDetails})
    }
    catch (error){
        console.log(error)
    }
})


module.exports = router;