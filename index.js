const express = require("express");
const cors = require('cors')
const app = express();
const mongoose = require("mongoose");
const requireDir = require("require-dir");

app.use(express.json())
app.use(cors())

mongoose.connect(
  "mongodb+srv://flavio:soeusei12@cluster0-6dw48.mongodb.net/products?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

requireDir("./src/models");
const Product = mongoose.model("Product");

app.use("/api", require("./src/routes"));


app.listen(4000);
