const express = require("express");
const { getFormSubmissions } = require("../controllers/clientController");
const router = express.Router();

// Client login and view form submissions
router.post("/submissions", getFormSubmissions);

module.exports = router;
