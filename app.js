const express = require("express");

const productRoutes = require("./routes/productRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const productOrderRoutes = require("./routes/productOrderRoutes");
const serviceRequestRoutes = require("./routes/serviceRequestRoutes");
const userRoutes = require("./routes/userRoutes");
const bloodDonorRoutes = require("./routes/bloodDonorRoutes");

const app = express();

// MIDDLEWARE

// Passing data through body
app.use(express.json());

// ROUTES
app.use("/product", productRoutes);
app.use("/service", serviceRoutes);
app.use("/productOrder", productOrderRoutes);
app.use("/serviceRequest", serviceRequestRoutes);
app.use("/user", userRoutes);
app.use("/bloodDonor",bloodDonorRoutes);

module.exports = app;
