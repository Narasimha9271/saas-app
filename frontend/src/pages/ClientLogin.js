import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Authentication logic
            navigate("/client/submissions");
        } catch (error) {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl mb-4">Client Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full mb-3 p-2 border rounded-md"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-3 p-2 border rounded-md"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ClientLogin;
