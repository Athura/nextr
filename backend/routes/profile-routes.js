const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// @route GET api/profile/test
// @desc This is the test route for profile
// @access public
router.get('/test', (req, res) => {
    res.json({
        msg: "Profile test is working"
    })
});

// @route GET api/profile/current
// @desc Allows you to fetch the current users profile
// @access private

module.exports = router;