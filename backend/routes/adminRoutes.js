const express = require("express");
const {
    loginAdmin,
    createClient,
    deleteClient,
    getAllClients,
} = require("../controllers/adminController");
const router = express.Router();

// Admin login route
router.post("/login", loginAdmin);

// Client management routes
router.post("/client", createClient);
router.get("/clients", getAllClients);
router.delete("/client/:id", deleteClient);

module.exports = router;
