const express = require("express");

const bloodDonor = require("../controllers/bloodDonorController");

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

router.route("/findDonare/:id").get(bloodDonor.getDonorByCondition);

module.exports = router;
