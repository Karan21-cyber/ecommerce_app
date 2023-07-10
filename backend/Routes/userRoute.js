const express = require("express");
const { registerUser, userLogin, alluser } = require("../Controller/userContoller");
const router = express.Router();


router.route("/").get(alluser);
router.route("/register").post(registerUser);
router.route("/login").get(userLogin);

module.exports = router