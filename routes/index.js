const express = require("express");

const Controller = require("../controller/index");

const router = express.Router();

router.get("/",Controller.entry);

router.use("/authenticate",require("./authenticate"));

router.use("/tweets",require("./tweets"));

module.exports = router;
