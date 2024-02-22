const express = require('express');
const Product = require('../model/productModel');
const { getAllProducts, getProductById, addProduct, deleteProduct, updateProduct } = require('../Controller/productController');

const route = express.Router();

route.get('/', getAllProducts);

route.get('/:id', getProductById);

route.post('/', addProduct);

route.put('/:id', updateProduct);

route.delete('/:id', deleteProduct);

module.exports = route;