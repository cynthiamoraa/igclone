const mongoose = require('mongoose');
const
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true  
    },
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: "no photo"
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})