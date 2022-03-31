const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router
  .route("/")
  .post(userController.createUser)
  .get(userController.getAllUsers);

router.route("/login").post(userController.logIn);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
