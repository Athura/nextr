const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const keys = require('../config/keys');

// Import User Model
const User = require('../models/User');

// @route GET api/users/test
// @desc This is the test route for user
// @access public
router.get('/test', (req, res) => {
    res.json({
        msg: "User test is working"
    })
});

// @route GET api/users/register
// @desc Register a user account
// @access public
router.post('/register', (req, res) => {
    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if (user) {
            return res.status(400).json({ email: 'Email already exists.'});
        } else {
            const avatar = gravatar.url(req.body.email, {
                s: '200', // Size 
                r: 'pg', // Rating
                d: 'retro' // image for if user doesnt have account
            });

            const newUser = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                avatar,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) {
                        throw err;
                    }
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                })
            })
        }
    })
});

// @route GET api/users/login
// @desc Login user / returning the JWT token
// @access public
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({
        email
    })
    .then(user => {
        // Check for user
        if (!user) {
            return res.status(404).json({email: 'User not found'});
        }

        // Check password to see if valid
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if (isMatch) {
                    // User matched
                    const payload = {
                        id: user.id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        avatar: user.avatar
                    }
                    // Sign the jwt token
                    jwt.sign(payload, keys.secretOrKey, { expiresIn: 36000 }, (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token
                        })
                    });
                } else {
                    return res.status(400).json({
                        password: 'Password incorrect'
                    });
                }
            })
    })
})

module.exports = router;