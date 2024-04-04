"use strict";
const express = require("express");
const router = express.Router();

const profileController = require("../controllers/profile.controller");

router.get("/profiles", profileController.profilesPage);
router.post("/createProfile", profileController.createProfile);
router.post("/deleteProfile", profileController.deleteProfile);
router.post("/editProfile", profileController.editProfile);

module.exports = router;