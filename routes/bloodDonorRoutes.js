const express = require("express");

const bloodDonor = require("../controllers/bloodDonor");

const router = express.Router();

router
  .route("/")
  .post(bloodDonor.createBloodDonor)
  .get(bloodDonor.getAllBloodDonors);

router
  .route("/:id")
  .get(bloodDonor.getBloodDonor)
  .patch(bloodDonor.updateBloodDonor)
  .delete(bloodDonor.deleteBloodDonor);

module.exports = router;
 