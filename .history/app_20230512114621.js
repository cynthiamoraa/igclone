const express = require('express');
const app = express();
const PORT = 5000;
const {MONGOURI} = require('./keys');


// IkXryaVOLHb08cX2



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})