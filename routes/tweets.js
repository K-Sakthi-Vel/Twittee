const express = require("express");

const Controller = require("../controller/tweets");

const router = express.Router();

router.post("/add_tweet",Controller.addTweet)

router.get("/next",Controller.next)

router.get("/previous",Controller.previous)

module.exports = router;