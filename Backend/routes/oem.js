const express = require('express');
const oemModel = require('../models/oemSpecs_model');

const oemRouter = express.Router();

oemRouter.post('/create',async(req,res)=>{
    oemModel.create(req.body);
    res.send("created successfully");
})

oemRouter.get('/get',async(req,res)=>{
let oemdata = await oemModel.find();
res.send({mssg:"oemSpecs Details",data:oemdata});
});

module.exports = oemRouter