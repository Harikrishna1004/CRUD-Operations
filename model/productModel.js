const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a product name"],
    },
    quantity: {
        type: Number,
        required: [true, "Please enter the quantity"],
        default: 0
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;