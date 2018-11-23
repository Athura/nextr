const express = require('express');
const router = express.Router();

// @route GET api/user/test
// @desc This is the test route for user
// @access public
router.get('/test', (req, res) => {
    res.json({
        msg: "User test is working"
    })
});

module.exports = router;