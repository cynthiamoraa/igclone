const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const PORT = 5000;
const {MONGOURI} = require('./keys');

require('./models/user');
// mongoose.model("User");

app.use(require)
mongoose.connect(MONGOURI)
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo yeah');
})

mongoose.connection.on("error", (error) => {
  console.log("err connecting", error);
});


// IkXryaVOLHb08cX2



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})