const express = require('express');
const router = express.Router();
const passport = require('passport');
const keys = require('../../config/key')

// Load Product Model
const Product = require('../../models/Product');
const User = require('../../models/User');



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


router.post('/event/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    userId = req.user.id;
    eventId = req.params.id
    User.findOneAndUpdate(
        { _id: userId },
        {
            $push: { whishlist: eventId }
        })
        .then(() => {
            Product.findOneAndUpdate(
                { _id: eventId },
                {
                    $push: { likes: userId }
                })
                .then(() => {
                    return res.json({
                        success: true
                    })
                })
        })
        .catch((error) => {
            return res.status(400).json({ error: error.message })
        });
})

module.exports = router;
