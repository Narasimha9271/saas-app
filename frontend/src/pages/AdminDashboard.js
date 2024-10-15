import { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await axios.get("/api/admin/clients");
                setClients(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchClients();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <ul>
                {clients.map((client) => (
                    <li key={client._id} className="p-2 border-b">
                        {client.domain} - Total Submissions:{" "}
                        {client.totalSubmissions}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
