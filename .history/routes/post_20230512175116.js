const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { route } = require("./auth");
const Post = mongoose.model("Post");
const requireLogin = require("../middleware/requireLogin");



router.post("/createpost", (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
        return res.status(422).json({ error: "Please add all the fields" });
    }
    const post = new Post({
        title,
        body,
        
    })
})

module.exports = router;