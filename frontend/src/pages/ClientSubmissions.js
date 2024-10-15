import { useEffect, useState } from "react";
import axios from "axios";

const ClientSubmissions = () => {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const res = await axios.get("/api/client/submissions");
                setSubmissions(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchSubmissions();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Form Submissions</h1>
            <ul>
                {submissions.map((submission) => (
                    <li key={submission._id} className="p-2 border-b">
                        {submission.name} - {submission.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientSubmissions;
