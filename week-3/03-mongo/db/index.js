const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://aditissigh24:Daug12345hter@cluster0.e3tkv.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
   username:String,
   password:String,

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
   username:String,
   password:String,
   purchasedCourses:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Course'
   }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
   title:String,
   description:String,
   imageUrl:String,
   price:Number


});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}