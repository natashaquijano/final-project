const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../../config/key')

// Load User Model
const User = require('../../models/User');

// Get api/users/test (Public)
router.get('/test', (req, res) => res.json({ msg: 'Users Endpoint' }));

// Get api/users/register (Public)
router.post('/register', (req, res) => {
    // Find User By Email
    User.findOne({ email: req.body.email })
        .then(user => {
            // If email already exists, send response
            if (user) {
                return res.status(400).json({ email: 'Email already exists' });
                // If email doesn't exist, create new user
            } else {
                // Get Avatar from Gravatar
                const avatar = gravatar.url(req.body.email, {
                    s: '200', // avatar size option
                    r: 'pg', // avatar rating option
                    d: 'mm', // default avatar option
                });

                // Create new user
                const newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    avatar,
                    password: req.body.password,
                });

                // Salt and Has password with bcryptjs, then save new user
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
// Get api/users/login (Public)
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Find User by Email
    User.findOne({ email })
        .then(user => {
            // Check for user
            if (!user) {
                return res.status(404).json({ email: 'User not found' })
            }

            // Check Password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // User matched, send JSON Web Token

                        // Create token payload (you can include anything you want)
                        const payload = { id: user.id, firstName: user.firstName, lastName: user.lastName, avatar: user.avatar }

                        // Sign In Token
                        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                            res.json({ success: true, token: 'Bearer' + token })
                        });
                    } else {
                        return res.status(400).json({ password: 'Password or email is incorrect' })
                    }
                })
        })

});

// Get api/users/current (Private)
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    // res.json({msg: 'Success'})
    // res.json(req.user);
    res.json({
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        avatar: req.user.avatar,
    })
});

module.exports = router;