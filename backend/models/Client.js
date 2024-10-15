const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    domain: { type: String, required: true },
    logo: { type: String, required: true },
    heading: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    formSubmissions: [{ name: String, email: String, message: String }],
});

module.exports = mongoose.model("Client", clientSchema);
