const express = require("express");
const router = express.Router();

const { search, profileById, matchHistory, stats} = require("../controller/overviewController");

router.get("/overview/profileById/:id", profileById)
router.get("/players/:id/matchHistory", matchHistory)
router.get("/players/:id/opponentsStats", stats)
router.get("/search", search);

module.exports = router;
