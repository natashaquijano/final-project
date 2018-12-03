const express = require('express');
const router = express.Router();
const keys = require('../../config/key')

// Load Product Model
const Product = require('../../models/Product');


// Add products to the products table
router.post('/add', (req, res) => {
    const products = req.body.products
    Product.insertMany(products)
        .then(doc => {
            return res.send({
                success: true
            })
        })
        .catch((e) => {
            return res.status(400).send({
                success: false,
                message: e.message
            })
        })


});

// Add products to the products table
router.get('/', (req, res) => {
    Product.find()
        .then(products => {
            return res.send({
                success: true,
                products
            })
        })
        .catch((e) => {
            return res.status(400).send({
                success: false,
                message: e.message
            })
        })


});

module.exports = router;
