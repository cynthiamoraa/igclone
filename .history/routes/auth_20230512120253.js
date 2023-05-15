const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("hello");
})

router.post('/signup', (req, res) => {
    const {name, email, password} = req.body
    if 
})

module.exports = router;