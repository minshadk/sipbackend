const express = require("express");

const serviceRequestController = require("../controllers/serviceRequestController");

const router = express.Router();

router
  .route("/")
  .post(serviceRequestController.generateRequest)
  .get(serviceRequestController.getAllRequest);

router
  .route("/:id")
  .get(serviceRequestController.getRequest)
  .patch(serviceRequestController.updateRequest)
  .delete(serviceRequestController.deleteRequest);

module.exports = router;
