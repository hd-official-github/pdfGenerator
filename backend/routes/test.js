var express = require('express');
var router = express.Router();


router.get('/test', (req, res) => {
    req.session.client = req.cookies.clientId
    res.json({ ok: true, client: req.session.client })
})


router.get('/test2', (req, res) => {
    res.json({ ok: "coming from 2", client: req.session.client })
})
function generateRandomNumberString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10); // Generates a random digit (0-9)
    }
    return result;
}

module.exports = router;