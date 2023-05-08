const express = require("express");
const router = express.Router();

const { topHeader } = require("../controller/headersController");

router.get("/topHeader", topHeader);

module.exports = router;
