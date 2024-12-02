const express = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin , Course} = require('../db')
const router = express.Router()

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password

    await Admin.create({
        username:username,
        password:password
    })
    res.status(200).json({
        msg:'admin created successfully'
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title=req.body.title
    const description=req.body.description
    const imageUrl=req.body.description
    const price=req.body.price
    await Course.create({
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price
    })
    res.status(200).json({
        msg:'course created successfully'
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response=await Course.find({})
    res.status(200).json({
        Courses:response
    })

});

module.exports = router;