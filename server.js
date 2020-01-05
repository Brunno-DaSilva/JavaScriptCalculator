const express = require('express');
const app = express();
const PORT = 3009;

app.listen(PORT, () => {
    console.log("app is running on port: ", PORT)
})