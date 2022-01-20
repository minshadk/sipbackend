const express = require("express");

const productRouter = require("./routes/productRoutes");
const serviceRouter = require("./routes/serviceRoutes");
const productOrderRouter = require("./routes/productOrderRoutes");

const app = express();

// MIDDLEWARE

// Passing data through body
app.use(express.json());

// ROUTES
app.use("/product", productRouter);
app.use("/service", serviceRouter);
app.use("/productOrder", productOrderRouter);

module.exports = app;
