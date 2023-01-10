const express = require("express");
const router = express.Router();

var publisherController = require("../controllers/publisher");

// Publisher Home Route.
router.get("/", publisherController.getPublisherPage);

router.post("/", publisherController.publishMQTTMessage);

module.exports = router;
