const express = require('express');
const Product = require('../model/productModel');
const asyncHandler = require('express-async-handler')

const getAllProducts = async(req, res) => { //Get all products
    const products = await Product.find({});
    res.status(200).json(products);
}

const getProductById = asyncHandler(async(req, res) => { //Get a product by its ID
    try {
        const { id } = req.params;
        const productById = await Product.findById(id);
        res.status(200).json(productById);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }

})

const addProduct = asyncHandler(async(req, res) => { //Add a product
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }

})

const updateProduct = asyncHandler(async(req, res) => {
    try {
        const id = req.params.id;
        const productUpdate = await Product.findByIdAndUpdate(id, req.body);
        if (!productUpdate) {
            return res.status(404).json({ message: "Cannot find the product" });
        }
        const updated = await Product.findById(id);
        res.status(200).json(updated);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

const deleteProduct = asyncHandler(async(req, res) => {
    try {
        const id = req.params.id;
        const productDelete = await Product.findByIdAndDelete(id);
        if (!productDelete) {
            return res.status(404).json({ message: "Cannot find the product" });
        }

        res.status(200).json(productDelete);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }

})

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}