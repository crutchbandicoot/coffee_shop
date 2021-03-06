const express = require('express');
const app = require('../../app');

const router = express.Router();

router.get('/', (req, res) =>{
    res.status(200).json({
        message: 'Hello from the orders route',
        product : {
            products: ['Mocojava', 'esspresso', 'capuccino']
        }
    });
});

router.get('/:id', (req,res) =>{
    const id = req.params.id;
    const product = {
        id: id,
        productName: 'Esspresso'
    };
    res.status(200).json({
        message: `The product ID for ${product.productName} is ${product.id}`
    });
});

router.post('/:id', (req, res) =>{
    const order = {
        id: req.params.id,
        orderedProduct: req.body.orderedProduct
    };
    res.status(201).json({
        message: 'Hello from the orders route',
        product: order
    });
});

router.delete('/:id', (req,res) =>{
    const id = req.params.id;
    res.status(200).json({
        message: `Product ID: ${id} has been deleted from the shopping cart`
    });
});

router.delete('/', (req,res) =>{
    const id = req.params.id;
    res.status(200).json({
        message: 'Your shopping cart is now empty'
    });
});
module.exports = router;