const express = require('express');
const router = express.Router();

// @route GET api/profile/test
// @desc This is the test route for profile
// @access public
router.get('/test', (req, res) => {
    res.json({
        msg: "Profile test is working"
    })
});

module.exports = router;