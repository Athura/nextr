const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load profile validator 
const validateProfileInput = require('../validation/profile');

// Load Profile Model
const Profile = require('../models/Profile');

// Load User Model
const User = require('../models/User');

// @route GET api/profile/test
// @desc This is the test route for profile
// @access public
router.get('/test', (req, res) => {
    res.json({
        msg: "Profile test is working"
    })
});

// @route GET api/profile/handle/:handle
// @desc Get profile by handle
// @access public
router.get('/handle/:handle', (req, res) => {
    const errors = {};

    Profile.findOne({
        handle: req.params.handle
    })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
        if (!profile) {
            errors.noprofile = 'There is no profile for this user';
            res.status(404).json(errors);
        }
        res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route GET api/profile/user/:user_id
// @desc Get profile by user ID
// @access public
router.get('/user/:user_id', (req, res) => {
    const errors = {};

    Profile.findOne({
        user: req.params.user_id
    })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
        if (!profile) {
            errors.noprofile = 'There is no profile for this user';
            res.status(404).json(errors);
        }
        res.json(profile);
    })
    .catch(err => res.status(404).json({profile: 'There is no profile for this user'}));
});

// @route GET api/profile
// @desc Allows you to fetch the current users profile
// @access private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};

    Profile.findOne({
        user: req.user.id
    })
    .populate('user', ['firstname', 'lastname', 'avatar'])
    .then(profile => {
        if (!profile) {
            errors.noprofile = 'There is no profile for this user.';
            return res.status(404).json(errors);
        }
        res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route POST api/profile
// @desc Allows you to create a profile for the current
// @access private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;

    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.budget) profileFields.budget = req.body.budget;
    if (req.body.status) profileFields.status = req.body.status;
    // Preferences - split into an array
    if (typeof req.body.preferences !== 'undefined') {
        profileFields.preferences = req.body.preferences.split(',');
    }
    // Bookmarks - split into an array
    if (typeof req.body.bookmarks !== 'undefined') {
        profileFields.bookmarks = req.body.bookmarks.split(',');
    }

    if (req.body.bio) profileFields.bio = req.body.bio;

    Profile.findOne({
        user: req.user.id
    })
    .then(profile => {
        if (profile) {
            // Update
            Profile.findOneAndUpdate({
                user: req.user.id
            }, {
                $set: profileFields
            }, {
                new: true
            })
            .then(profile => res.json(profile));
        } else {
            // Create

            // Check if handle exists
            Profile.findOne({
                handle: profileFields.handle
            })
            .then(profile => {
                if (profile) {
                    errors.handle = 'That handle already exists';
                    res.status(400).json(errors);
                }

                // Save Profile
                new Profile(profileFields)
                    .save()
                    .then(profile => res.json(profile));
            })
        }
    })
});

module.exports = router;