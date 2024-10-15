const Admin = require("../models/Admin");
const Client = require("../models/Client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Admin login
const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });
        if (!admin) return res.status(404).json({ message: "Admin not found" });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch)
            return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Create a new client
const createClient = async (req, res) => {
    const { domain, logo, heading, email, username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const client = new Client({
            domain,
            logo,
            heading,
            email,
            username,
            password: hashedPassword,
        });

        await client.save();
        res.status(201).json({ message: "Client created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Delete a client
const deleteClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client)
            return res.status(404).json({ message: "Client not found" });

        await client.remove();
        res.json({ message: "Client deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// View all clients
const getAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    loginAdmin,
    createClient,
    deleteClient,
    getAllClients,
};
