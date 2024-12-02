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

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router