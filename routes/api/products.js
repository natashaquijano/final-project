const express = require('express');
const router = express.Router();
const passport = require('passport');
const keys = require('../../config/key')

// Load Product Model
const Product = require('../../models/Product');
const User = require('../../models/User');
const Comment = require('../../models/Comment').model



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

router.get('/:id', (req, res) => {
    Product.findOne({ _id: req.params.id })
        .populate('comments.user')
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

// Add products to the products table
router.get('/', (req, res) => {
    Product.find({ productType: "Events" })
        .populate('comments.user')
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


router.delete("/:eventId/comments/:commentId", passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const commentId = req.params.commentId;
        const eventId = req.params.eventId

        Comment.deleteOne({
            _id: commentId
        }).then(() => {
            Product.findOneAndUpdate({ _id: eventId }, {
                $pull: { comments: { _id: commentId } }
            })
                .then(() => {
                    Product.findById(eventId)
                        .populate('comments.user')
                        .then(event => {
                            return res.send({
                                success: true,
                                event
                            })
                        })
                        .catch((e) => {
                            return res.status(400).send({
                                success: false,
                                message: e.message
                            })
                        })
                }).catch((e) => {
                    return res.status(400).send({
                        success: false,
                        message: e.message
                    })
                })
        })
            .catch((e) => {
                return res.status(400).send({
                    success: false,
                    message: e.message
                })
            })


    })



router.post('/event/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    userId = req.user.id;
    eventId = req.params.id

    if (req.body.comment) {
        User.findById(userId).then((user) => {
            const comment = new Comment({
                user,
                comment: req.body.comment
            })
            comment.save()
                .then((savedComment) => {
                    Product.findOneAndUpdate(
                        { _id: eventId },
                        {
                            $push: { comments: savedComment }
                        })
                        .then(() => {
                            Product.findById(eventId)
                                .populate('comments.user')
                                .then(event => {
                                    return res.send({
                                        success: true,
                                        event
                                    })
                                })
                                .catch((e) => {
                                    return res.status(400).send({
                                        success: false,
                                        message: e.message
                                    })
                                })
                        })
                        .catch((error) => {
                            return res.status(400).json({ error: error.message })
                        });
                })
                .catch((error) => {
                    return res.status(400).json({ error: error.message })
                });
        }).catch((error) => {
            return res.status(400).json({ error: error.message })
        });
    } else if (req.body.add) {
        User.findOneAndUpdate(
            { _id: userId },
            {
                $push: { wishlist: eventId }
            })
            .then(() => {

                User.findById(userId)
                    .populate('following')
                    .populate('wishlist')
                    .populate('likes')
                    .exec(function (err, user) {
                        if (err) return res.status(400).json({ error: err.message })
                        return res.send({
                            user
                        })
                    });

            })
            .catch((error) => {
                return res.status(400).json({ error: error.message })
            });

    } else {
        User.findOneAndUpdate(
            { _id: userId },
            {
                $push: { likes: eventId }
            })
            .then(() => {
                Product.findOneAndUpdate(
                    { _id: eventId },
                    {
                        $push: { likes: userId }
                    })
                    .then(() => {

                        User.findById(userId)
                            .populate('following')
                            .populate('wishlist')
                            .populate('likes')
                            .exec(function (err, user) {
                                if (err) return res.status(400).json({ error: err.message })
                                return res.send({
                                    user
                                })
                            });

                    })
            })
            .catch((error) => {
                return res.status(400).json({ error: error.message })
            });
    }
})

module.exports = router;
