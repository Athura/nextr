const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Load input validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

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

// @route POST api/users/register
// @desc Register a user account
// @access public
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if (user) {
            errors.email = 'Email already exists';
            return res.status(400).json(errors);
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
    const { errors, isValid } = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({
        email
    })
    .then(user => {
        // Check for user
        if (!user) {
            errors.email = 'User not found.'
            return res.status(404).json(errors);
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
                    errors.password = 'Password incorrect';
                    return res.status(400).json(errors);
                }
            })
    })
})

// @route GET api/users/current
// @desc Get the current user
// @access private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json(req.user)
})

module.exports = router;