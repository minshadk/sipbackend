const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const productOrderRoutes = require("./routes/productOrderRoutes");
const serviceRequestRoutes = require("./routes/serviceRequestRoutes");
const userRoutes = require("./routes/userRoutes");
const bloodDonorRoutes = require("./routes/bloodDonorRoutes");
const bloodRequest = require("./routes/bloodRequestRoutes");


const sendBloodRequestMsgRoutes = require("./routes/sendBloodRequestMsgRoutes")

const app = express();

// MIDDLEWARE
app.use(cors());

// Passing data through body
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/product", productRoutes);
app.use("/service", serviceRoutes);
app.use("/productOrder", productOrderRoutes);
app.use("/serviceRequest", serviceRequestRoutes);
app.use("/user", userRoutes);
app.use("/bloodDonor", bloodDonorRoutes);
app.use("/bloodRequest", bloodRequest);

app.use("/sendBloodRequestMsg",sendBloodRequestMsgRoutes)

module.exports = app;