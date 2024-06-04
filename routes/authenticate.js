const express = require("express");

const Controller = require("../controller/index");

const router = express.Router();

router.post("/registerUser",Controller.register);

router.get("/sign-in-page",Controller.signInPage);

router.post("/create_session",Controller.createSession);

router.get("/home", Controller.home);

module.exports = router;