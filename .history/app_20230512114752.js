const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const PORT = 5000;
const {MONGOURI} = require('./keys');

mongoose.connect(MONGOURI)


// IkXryaVOLHb08cX2



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})