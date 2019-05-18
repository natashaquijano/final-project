const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
let keys
if (process.env.secretOrKey) {
    keys = process.env.secretOrKey;
} else {
    keys = require('../../config/key')
}




// Load User Model
const User = require('../../models/User');

// GET api/users/test (Public)
router.get('/test', (req, res) => res.json({ msg: 'Users Endpoint Ok' }));

// SIGNUP

// GET api/users/register (Public)
router.post('/register', (req, res) => {
    // Find User By username
    User.findOne({ username: req.body.username })
        .then(user => {
            // If username already exists, send 400 response
            if (user) {
                return res.status(400).json({ username: 'username already exists' });
                // If username does not already exist, create new user
            } else {
                // Get avatar from Gravatar
                const avatar = gravatar.url(req.body.username, {
                    s: '200', // avatar size option
                    r: 'pg', // avatar rating option
                    d: 'mm', // default avatar option
                });

                // Create new user
                const newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    username: req.body.username,
                    email: req.body.email,
                    avatar,
                    password: req.body.password,
                });

                // Salt and Hash password with bcryptjs, then save new user
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {

                                const payload = { id: user.id, username: user.username, avatar: user.avatar }

                                // Sign In token
                                jwt.sign(payload, keys.secretOrKey, { expiresIn: 86400 }, (err, token) => {
                                    res.json({ success: true, token: 'Bearer ' + token })
                                });
                            })
                            .catch(err => console.log(err));
                    })
                })

            }
        })
});

// LOGIN

// GET api/users/login (Public)

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Find User by email
    User.findOne({ username })
        .then(user => {
            // Check for user
            if (!user) {
                return res.status(404).json({ username: 'User not found' })
            }

            // Check password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // User matched, send JSON Web Token

                        // Create token payload (you can include anything you want)
                        const payload = { id: user.id, username: user.username, avatar: user.avatar }

                        // Sign In token
                        jwt.sign(payload, keys.secretOrKey, { expiresIn: 86400 }, (err, token) => {
                            res.json({
                                success: true, token: 'Bearer '
                                    + token
                            })
                        });
                    } else {
                        return res.status(400).json({ password: 'Password or username is incorrect' })
                    }
                })
        })
});

// GET api/users/current (Private)
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById(req.user.id)
        .populate('following')
        .populate('wishlist')
        .populate('likes')
        .exec(function (err, user) {
            if (err) return res.status(400).json({ error: err.message })
            return res.send({
                user
            })
        });
});


router.post('/follow/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    followerId = req.user.id;
    followId = req.params.id
    User.findOneAndUpdate(
        { _id: followId },
        {
            $push: { followers: followerId }
        })
        .then(() => {
            User.findOneAndUpdate(
                { _id: followerId },
                {
                    $push: { following: followId }
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
