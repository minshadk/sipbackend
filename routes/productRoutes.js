const express = require("express");

const productController = require("../controllers/productController");

const parser = require("../middleware/imageUploadMiddleware");

const router = express.Router();

router
  .route("/")
  .post(parser.single("image"), productController.createProduct)
  .get(productController.getAllProducts);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
