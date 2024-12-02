const express = require("express");
const router =express.Router();
const {user, Course}= require('../db')
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username=req.body.username
    const password=req.body.password
    await user.create({
        username:username,
        password:password
    })
    res.status(200).json({
        msg:'user created successfully'
    })

});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response= await Course.find({})
    res.status(200).json({
        Courses:response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId
    const username=req.headers.username
    await user.updateOne({
        username:username
    },{
        '$push':{
            purchasedCourses:courseId
        }
    })
    res.json({
        msg:'purchase complete'
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user=await user.findOne({
        username:req.headers.username
    })
    console.log(user.purchasedCourses)
    const courses=await Course.findOne({
        _id:{
            '$in':user.purchasedCourses
        }
    })
    res.json({
        courses:courses
    })
});

module.exports = router