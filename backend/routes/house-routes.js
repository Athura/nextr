const express = require('express');
const router = express.Router();

// @route GET api/house/test
// @desc This is the test route for house
// @access public
router.get('/test', (req, res) => {
    res.json({
        msg: "House test is working"
    })
});

module.exports = router;