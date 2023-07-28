require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 8005;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});