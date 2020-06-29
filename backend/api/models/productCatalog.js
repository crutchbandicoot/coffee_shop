const mongoose = require('mongoose');
const shortid = require("shortid");

const productSchema = mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    productName: String,
    productPrice: String
});

module.exports = mongoose.model('Product', productSchema);
