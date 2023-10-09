const express = require('express');
const inventoryModel = require('../models/inventory_model');
const inventoryRouter = express.Router();

inventoryRouter.post('/create',async(req,res)=>{
    try {
        const data = inventoryModel.create(req.body);
        res.send({mssg:"data save successful"});
    } catch (error) {
        res.send(error.message);
    }
})

inventoryRouter.get('/get',async(req,res)=>{
    try {
        let inventorydata = await inventoryModel.find();
        res.send({mssg:"inventory Details",data:inventorydata});
    } catch (error) {
        res.send(error.message);
    }

});

inventoryRouter.put('/update:id',async(req,res)=>{
try {
    const id = req.params.id;
    const data = req.body;
    const updated = inventoryModel.findByIdAndUpdate(id,data);

    if(!updated){
        res.send("Item not found");
    }
    res.json(updated);
} catch (error) {
    res.send(error.message);
}
});

inventoryRouter.delete('/delete',async(req,res)=>{
    try {
        const id = req.params.id;
        const deleted = inventoryModel.findByIdAndDelete(id);
        if(!deleted){
            res.send("Item not found");
        }
        res.send("deleted successfully");
    } catch (error) {
        res.send(error.message);
    }
});

inventoryRouter.get('/price/:order',async(req,res)=>{
try {
    const order = req.params.order;
    let sortOrder;
    if(order === "HTL"){
        sortOrder = -1;
    }else if(order === "LTH"){
        sortOrder=1;
    }
    const filtered = await inventoryModel.find().sort({price:sortOrder})
    res.send(filtered);
} catch (error) {
    res.send(error.message);
}
});

inventoryRouter.get('/color/:color',async(req,res)=>{
try {
    const color = req.params.color;
    const selected = await inventoryModel.find({color:color});
    res.send(selected);
} catch (error) {
    res.send(error.message);
}
});

inventoryRouter.get('/mileage/:min/:max',async(req,res)=>{
    
    try {
       const min = req.params.min;
       const max = req.params.max;  
       const result = await inventoryModel.find({mileage:{$gte:min,$lte:max}});
       res.send(result);
    } catch (error) {
        res.send(error.message);
    }
})
module.exports = inventoryRouter