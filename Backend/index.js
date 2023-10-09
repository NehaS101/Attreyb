const express = require('express');
const connection = require('./config/db');
const inventoryRouter = require('./routes/Inventory');
const oemRouter = require('./routes/oem');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use("/inventory", inventoryRouter)
app.use("/oem", oemRouter);

app.get('/', async(req,res)=>{
res.send("welcome to BuycCorp");
})

app.listen(process.env.port,async()=>{
try {
    console.log('listening on port '+process.env.port);
    await connection
    console.log("successfully connected to db")
} catch (err) {
    console.log(err)
}
})