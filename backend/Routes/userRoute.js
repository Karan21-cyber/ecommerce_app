const express = require("express");
const { registerUser, userLogin, alluser, updateUser } = require("../Controller/userContoller");
const router = express.Router();


router.route("/").get(alluser);
router.route("/register").post(registerUser);
router.route("/login").get(userLogin);
router.route("/update").put(updateUser);

module.exports = router