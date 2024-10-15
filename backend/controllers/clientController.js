const Client = require("../models/Client");

// View form submissions
const getFormSubmissions = async (req, res) => {
    const { username, password } = req.body;

    try {
        const client = await Client.findOne({ username });
        if (!client)
            return res.status(404).json({ message: "Client not found" });

        const isMatch = await bcrypt.compare(password, client.password);
        if (!isMatch)
            return res.status(400).json({ message: "Invalid credentials" });

        res.json(client.formSubmissions);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getFormSubmissions };
