const express = require('express');
const inventoryModel = require('../models/inventory_model');
const inventoryRouter = express.Router();

inventoryRouter.post('/create',async(req,res)=>{
const data = inventoryModel.create(req.body);

res.send({mssg:"data save successful"});
})
module.exports = inventoryRouter