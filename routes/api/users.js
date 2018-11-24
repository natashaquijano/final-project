const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../../config/key')

// Load User Model
const User = require('../../models/User');

// GET api/users/test (Public)
router.get('/test', (req, res) => res.json({ msg: 'Users Endpoint Ok' }));

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
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })

            }
        })
});

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
                        const payload = { id: user.id, name: user.name, avatar: user.avatar }

                        // Sign In token
                        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                            res.json({ success: true, token: 'Bearer ' + token })
                        });
                    } else {
                        return res.status(400).json({ password: 'Password or username is incorrect' })
                    }
                })
        })
});

// GET api/users/current (Private)
router.get('current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.body.username,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        username: req.user.username,
        avatar: req.user.avatar,
    })
});

module.exports = router;