const request = require('supertest');
const assert = require('assert');
const express = require('express');
const { error } = require('console');

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint
app.use((req,res,next)=>{
  if(err){
    errorCount+=1;
    return res.status(400).json({error:err.message || "not found"})
  }
  next();
})

app.use((req,res,next)=>{
  const userID=req.header('user-id')
  if(!userID){
    res.status(400).json("userid should be in header")
    errorCount= errorCount+1
  }
})
app.get('/user', function(req, res) {
  try{
    throw new Error("User not found");
    res.status(200).json({ name: 'john' });
  }
  catch(err){
    errorCount+=1;
    next(err)
  }
  
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

module.exports = app;