import { useState } from "react";
import axios from "axios";

const ContactForm = ({ clientDomain }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/api/client/${clientDomain}/form`, {
                name,
                email,
                message,
            });
            alert("Form submitted successfully");
        } catch (error) {
            console.error("Error submitting form", error);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mb-4 p-2 border rounded-md"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 p-2 border rounded-md"
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full mb-4 p-2 border rounded-md"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
