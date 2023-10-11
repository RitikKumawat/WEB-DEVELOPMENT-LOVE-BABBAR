const express = require('express');
const router = express.Router();

const {localfileUpload}  = require("../controllers/fileUpload");

// router.post("/imageUpload",imageUpload);
// router.post("/videoUpload",videoUploadUpload);

router.post("/localfileUpload",localfileUpload);

module.exports = router;