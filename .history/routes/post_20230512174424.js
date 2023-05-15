const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { route } = require("./auth");


route.post("/createpost", (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
        
})

module.exports = router;