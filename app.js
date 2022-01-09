const express = require("express");

const productRouter = require("./routes/productRoutes");

const app = express();

// MIDDLEWARE

// Passing data through body
app.use(express.json());

// ROUTES
app.use("/product", productRouter);

module.exports = app;
