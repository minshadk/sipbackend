const express = require("express");

const productOrderController = require("../controllers/productOrderController");

const router = express.Router();

router
  .route("/")
  .post(productOrderController.generateOrder)
  .get(productOrderController.getAllOrders);

router
  .route("/:id")
  .get(productOrderController.getOrder)
  .patch(productOrderController.updateOrder)
  .delete(productOrderController.deleteOrder);
  
module.exports = router;
