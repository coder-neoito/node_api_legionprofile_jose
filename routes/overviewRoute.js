const express = require("express");
const router = express.Router();

const { search, profileById} = require("../controller/overviewController");

router.get("/profileById/:id", profileById)
router.get("/search", search);

module.exports = router;
