const express = require('express');
const app = require('../../app');

const router = express.Router();

router.get('/', (req, res) =>{
    res.status(200).json({
        message: 'Hello from the products route'
    });
});

router.get('/:id', (req,res) =>{
    const id = req.params.id;
    res.status(200).json({
        id: id
    });
});

module.exports = router;