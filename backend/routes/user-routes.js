const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

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
                d: 'monsterid' // image for if user doesnt have account
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

module.exports = router;