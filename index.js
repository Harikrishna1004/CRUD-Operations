const http = require('http');
const express = require('express');
const Product = require('./model/productModel');
require('dotenv').config();
const mongoose = require('mongoose');
const errorMiddleware = require('./Middleware/errorMiddleware');
const productRoute = require('./Routes/productRoute');


const MONGO_DB = process.env.MONGO_DB;

const app = express();


app.use(express.json());

//Routes

app.use('/api/product', productRoute);


app.get('/', (req, res) => {
    // throw new Error("error Hogaya Bhai :(");
    res.send("Hello Hari");
})

app.use(errorMiddleware);


const port = 3000;

mongoose.connect(MONGO_DB)
    .then(() => {
        console.log("You are connected to the database");
        app.listen(port, () => {
            console.log("You are connected to the server");
        })
    });