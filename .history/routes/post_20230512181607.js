const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const requireLogin = require("../middleware/requireLogin");

router.get("/allpost", (req, res) => {

router.post("/createpost", (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
        return res.status(422).json({ error: "Please add all the fields" });
    }
    req.user.password = undefined;
    const post = new Post({
        title,
        body,
        postedBy: req.user,
    })
    post.save().then(result => {
        res.json({ post: result })
    })
    .catch(err => {
         console.log(err);
    })
})

module.exports = router;