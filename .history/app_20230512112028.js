const express = require('express');
const app = express();
const PORT = 5000;

const customMiddle

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})