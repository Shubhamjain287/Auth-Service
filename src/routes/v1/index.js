const express = require("express");
const router = express.Router();

const userController = require("../../controllers/user-controller");
const AuthRequestValidator = require("../../middlewares/index");

router.post("/signup", AuthRequestValidator.validateUserAuth ,userController.create);
router.post("/signin",AuthRequestValidator.validateUserAuth,userController.signIn);

module.exports = router;