const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("hello");
})

router.post('/signup', (req, res) => {
    

module.exports = router;