const express = require('express');
const connection = require('./config/db');
require('dotenv').config();

const app = express();

app.use(express.json());


app.listen(process.env.port,async()=>{
try {
    console.log('listening on port '+process.env.port);
    await connection
    console.log("successfully connected to db")
} catch (err) {
    console.log(err)
}
})