const express = require("express");

const productRouter = require("./routes/productRoutes");
const serviceController = require("./routes/serviceRoutes");

const app = express();

// MIDDLEWARE

// Passing data through body
app.use(express.json());

// ROUTES
app.use("/product", productRouter);
app.use("/service", serviceController);

module.exports = app;
