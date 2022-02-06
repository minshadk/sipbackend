const express = require("express");

const bloodRequestController = require("../controllers/bloodRequestController");

const router = express.Router();

router
  .route("/")
  .post(bloodRequestController.generateBloodRequest)
  .get(bloodRequestController.getAllBloodRequest);

  router
  .route("/:id")
  .get(bloodRequestController.getBloodRequest)
  .patch(bloodRequestController.updateBloodRequest)
  .delete(bloodRequestController.deleteBloodRequest);

  router.route("/test").get(bloodRequestController.findingByRadius)
module.exports = router;
