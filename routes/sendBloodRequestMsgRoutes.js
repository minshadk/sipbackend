const express = require("express");

const sendBloodRequestMsg = require("../controllers/sendBloodRequestMsg")

const router = express.Router();

router
  .route("/")
  .get(sendBloodRequestMsg.findingByRadius)

module.exports = router;
