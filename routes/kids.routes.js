const express = require('express');
const router = express.Router();
const Activity =require('../models/Activity.model');
const Kid =require('../models/Kid.model');


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
        const newkid = await Kid.create(kidInfo)
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
        const kidDetails = await kid.findById(kidId)
        console.log(kidDetails)
        res.render("kids/kid-info", {kid : kidDetails})
    }
    catch (error){
        console.log(error)
    }
})


module.exports = router;