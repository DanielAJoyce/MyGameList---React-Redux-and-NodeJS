const express = require("express");
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.listen(port, () =>{
    console.log(`Server up and running on ${port}`);
});

