const express = require("express");
const Product = require("../models/productCatalog");

const router = express.Router();

// Get products from the database
router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({
        message: 'Products in the inventory',
        product: product
    });
  } catch (err) {
      console.log(err);
  }  
});

// Get product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById({
        _id: req.params.id
    });
      res.status(200).json({
          message: `${product.productName} is in the inventory`,
          product: product
      });
  } catch (err) {
      console.log(err);
  }
});

// Putting products into the database
router.post("/", async (req, res) => {
  const product = await new Product({
    productName: req.body.productName,
    productPrice: req.body.productPrice,
  });
  /* TODO
    put a condtional that checks if product exists in the database before storing it
  
  */  
  try {
    product.save((err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.status(201).json({
            message: `${data.productName} has been saved to the inventory`,
            product: data,
          });
        }
      });
  } catch (err) {
      console.log(err);
  }
});

router.delete("/:id", (req, res) => {
  const id = req.body.id;
  res.status(200).json({
    message: `Product ID: ${id} has been deleted from the inventory`,
  });
});

module.exports = router;
